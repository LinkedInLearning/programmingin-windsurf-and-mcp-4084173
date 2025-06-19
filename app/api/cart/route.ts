import { NextResponse } from 'next/server';
import { getCart, clearCart } from '@/lib/cart';

export async function GET() {
  const cartItems = getCart();
  return NextResponse.json(cartItems);
}

export async function DELETE() {
  clearCart();
  return NextResponse.json({ message: 'Cart cleared successfully' }, { status: 200 });
}
