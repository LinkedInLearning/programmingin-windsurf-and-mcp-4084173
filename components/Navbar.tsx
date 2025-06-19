'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/catalog">Catalog</Link></li>
        <li><Link href="/checkout">Checkout</Link></li>
        <li><Link href="/loyalty">Loyalty Program</Link></li>
        <li className="ml-auto">
          <Link href="/cart" className="flex items-center">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
