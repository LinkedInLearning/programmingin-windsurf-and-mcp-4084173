import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/catalog">Catalog</Link></li>
        <li><Link href="/checkout">Checkout</Link></li>
        <li><Link href="/loyalty">Loyalty Program</Link></li>
      </ul>
    </nav>
  );
}
