/* eslint-disable no-console */
'use client';

import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { CartItem } from '@/lib/cart'; // Assuming Product type is also exported or not needed directly here

// --- Types ---
type CartContextType = {
  cartItems: CartItem[];
  isLoading: boolean;
  error: Error | null;
  fetchCart: () => void;
  addItem: (productId: number, quantity: number) => Promise<CartItem | null>;
  updateItemQuantity: (productId: number, quantity: number) => Promise<CartItem | null>;
  removeItem: (productId: number) => Promise<boolean>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
};

interface AddItemPayload {
  productId: number;
  quantity: number;
}

interface UpdateItemPayload {
  productId: number;
  quantity: number;
}

// --- API Fetcher Functions ---
const getCartAPI = async (): Promise<CartItem[]> => {
  const response = await fetch('/api/cart');
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

const addItemToCartAPI = async (payload: AddItemPayload): Promise<CartItem> => {
  const response = await fetch('/api/cart/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to add item to cart' }));
    throw new Error(errorData.message || 'Failed to add item to cart');
  }
  return response.json();
};

const updateCartItemAPI = async (payload: UpdateItemPayload): Promise<CartItem> => {
  const response = await fetch(`/api/cart/items/${payload.productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity: payload.quantity }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to update cart item' }));
    throw new Error(errorData.message || 'Failed to update cart item');
  }
  return response.json();
};

const removeCartItemAPI = async (productId: number): Promise<boolean> => {
  const response = await fetch(`/api/cart/items/${String(productId)}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to remove item from cart' }));
    throw new Error(errorData.message || 'Failed to remove item from cart');
  }
  // Assuming API returns { message: '...' } on success
  return true; 
};

const clearCartAPI = async (): Promise<void> => {
  const response = await fetch('/api/cart', {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to clear cart' }));
    throw new Error(errorData.message || 'Failed to clear cart');
  }
};

// --- Context Definition ---
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- Query Client (should be instantiated once, typically in _app.tsx or layout.tsx) ---
// For simplicity in this example, we'll create it here. 
// In a real app, provide this from a higher level.
const queryClient = new QueryClient();

// --- CartProvider Component ---
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const queryClientInstance = useQueryClient(); // Get client from provider

  const { data: cartItems = [], isLoading, error, refetch: fetchCart } = useQuery<CartItem[], Error>({
    queryKey: ['cart'],
    queryFn: getCartAPI,
  });

  const addItemMutation = useMutation<CartItem, Error, AddItemPayload>({
    mutationFn: addItemToCartAPI,
    onSuccess: () => {
      queryClientInstance.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err: Error) => {
      console.error("Error adding item:", err.message);
    }
  });

  const updateItemMutation = useMutation<CartItem, Error, UpdateItemPayload>({
    mutationFn: updateCartItemAPI,
    onSuccess: () => {
      queryClientInstance.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err: Error) => {
      console.error("Error updating item:", err.message);
    }
  });

  const removeItemMutation = useMutation<boolean, Error, number>({
    mutationFn: removeCartItemAPI,
    onSuccess: () => {
      queryClientInstance.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err: Error) => {
      console.error("Error removing item:", err.message);
    }
  });

  const clearCartMutation = useMutation<void, Error>({
    mutationFn: clearCartAPI,
    onSuccess: () => {
      queryClientInstance.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err: Error) => {
      console.error("Error clearing cart:", err.message);
    }
  });

  const addItem = async (productId: number, quantity: number) => {
    try {
      return await addItemMutation.mutateAsync({ productId, quantity });
    } catch (e) {
      // Error is already logged by onError in useMutation
      return null;
    }
  };

  const updateItemQuantity = async (productId: number, quantity: number) => {
    try {
      return await updateItemMutation.mutateAsync({ productId, quantity });
    } catch (e) {
      return null;
    }
  };

  const removeItem = async (productId: number) => {
    try {
      return await removeItemMutation.mutateAsync(productId);
    } catch (e) {
      return false;
    }
  };

  const clearCart = async () => {
    try {
      await clearCartMutation.mutateAsync();
    } catch (e) {
      // Error handled by mutation's onError
    }
  };
  
  const totalItems = useMemo(() => cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0), [cartItems]);
  const totalPrice = useMemo(() => cartItems.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0), [cartItems]);

  const contextValue = {
    cartItems,
    isLoading,
    error,
    fetchCart,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// --- Custom Hook to use Cart Context ---
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// --- Main App Provider (combines QueryClientProvider and CartProvider) ---
// This should wrap your main application layout or root component.
export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
};
