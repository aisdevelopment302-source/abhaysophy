"use client";

import { createContext, useContext, useReducer, useCallback, type ReactNode } from "react";
import { CartItem, CartState, Product, Size } from "@/types";

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; size: Size; color: string } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; size: Size; color: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; size: Size; color: string; quantity: number } }
  | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size, color } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [...state.items, { product, quantity: 1, size, color }];
      }

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      };
    }

    case "REMOVE_ITEM": {
      const { productId, size, color } = action.payload;
      const newItems = state.items.filter(
        (item) => !(item.product.id === productId && item.size === size && item.color === color)
      );
      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, size, color, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { productId, size, color } });
      }
      const newItems = state.items.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );
      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      };
    }

    case "CLEAR_CART":
      return { items: [], totalItems: 0, totalPrice: 0 };

    default:
      return state;
  }
}

interface CartContextType {
  cart: CartState;
  addItem: (product: Product, size: Size, color: string) => void;
  removeItem: (productId: string, size: Size, color: string) => void;
  updateQuantity: (productId: string, size: Size, color: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product: Product, size: Size, color: string) => {
    dispatch({ type: "ADD_ITEM", payload: { product, size, color } });
  }, []);

  const removeItem = useCallback((productId: string, size: Size, color: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, size, color } });
  }, []);

  const updateQuantity = useCallback((productId: string, size: Size, color: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, size, color, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
