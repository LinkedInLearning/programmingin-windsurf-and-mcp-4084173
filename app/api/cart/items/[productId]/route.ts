import { NextResponse } from 'next/server';
import { updateCartItemQuantity, removeCartItem, CartItem } from '@/lib/cart';

interface Params {
  productId: string;
}

export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    const { productId } = params;
    const { quantity } = await request.json();

    if (typeof quantity !== 'number') {
      return NextResponse.json({ message: 'Invalid request body. Quantity must be a number.' }, { status: 400 });
    }

    if (quantity <= 0) {
        // If quantity is 0 or less, it's effectively a removal or an invalid update for PUT.
        // We'll treat it as a request to remove the item if it exists, or an error if it doesn't.
        const removed = removeCartItem(productId);
        if (removed) {
            return NextResponse.json({ message: 'Item quantity updated to 0, item removed.' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Item not found or invalid quantity for update.' }, { status: 404 });
        }
    }

    const updatedItem = updateCartItemQuantity(productId, quantity);

    if (!updatedItem) {
      return NextResponse.json({ message: 'Cart item not found or could not be updated.' }, { status: 404 });
    }

    return NextResponse.json(updatedItem, { status: 200 });
  } catch (error) {
    console.error('Error updating cart item:', error);
    return NextResponse.json({ message: 'Error updating cart item' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    const { productId } = params;
    const success = removeCartItem(productId);

    if (!success) {
      return NextResponse.json({ message: 'Cart item not found.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Item removed from cart successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return NextResponse.json({ message: 'Error removing item from cart' }, { status: 500 });
  }
}
