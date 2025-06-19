import { NextResponse } from 'next/server';
import { addItemToCart, CartItem } from '@/lib/cart';

export async function POST(request: Request) {
  try {
    const { productId, quantity } = await request.json();

    if (!productId || typeof quantity !== 'number' || quantity <= 0) {
      return NextResponse.json({ message: 'Invalid request body. Product ID and positive quantity are required.' }, { status: 400 });
    }

    const newItem = addItemToCart(productId, quantity);

    if (!newItem) {
      return NextResponse.json({ message: 'Product not found or could not be added to cart.' }, { status: 404 });
    }

    return NextResponse.json(newItem, { status: 201 }); // 201 Created
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return NextResponse.json({ message: 'Error adding item to cart' }, { status: 500 });
  }
}
