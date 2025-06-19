import { products as appProducts, Product as AppProduct } from '@/app/data/products';

export interface Product extends AppProduct {
  imageUrl?: string; // Optional: for UI purposes, not in AppProduct by default
}

export interface CartItem extends Product {
  quantity: number;
}

let cartItems: CartItem[] = [];

export const getCart = (): CartItem[] => {
  return cartItems;
};

export const addItemToCart = (productId: number, quantity: number): CartItem | null => {
  const appProduct = appProducts.find(p => p.id === productId);
  if (!appProduct) {
    return null; // Product not found
  }
  // Adapt appProduct to our CartItem structure if needed, especially if imageUrl is managed separately
  const product: Product = { ...appProduct, imageUrl: appProduct.imageUrl || `/images/product-${appProduct.id}.jpg` }; // Use imageUrl from AppProduct if available, else generate example

  const existingItemIndex = cartItems.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    // Product already in cart, update quantity
    cartItems[existingItemIndex].quantity += quantity;
    return cartItems[existingItemIndex];
  } else {
    // Add new item to cart
    const newItem: CartItem = { ...product, quantity };
    cartItems.push(newItem);
    return newItem;
  }
};

export const updateCartItemQuantity = (productId: number, quantity: number): CartItem | null => {
  const itemIndex = cartItems.findIndex(item => item.id === productId);

  if (itemIndex > -1) {
    if (quantity <= 0) {
      // If quantity is 0 or less, remove the item
      cartItems.splice(itemIndex, 1);
      return null; // Indicate item removed
    } else {
      cartItems[itemIndex].quantity = quantity;
      return cartItems[itemIndex];
    }
  } else {
    return null; // Item not found
  }
};

export const removeCartItem = (productId: number): boolean => {
  const initialLength = cartItems.length;
  cartItems = cartItems.filter(item => item.id !== productId);
  return cartItems.length < initialLength; // Return true if item was removed
};

export const clearCart = (): void => {
  cartItems = [];
};
