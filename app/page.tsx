import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Kitchen Supply Co.</h1>
      <p className="mt-2">Your one-stop shop for premium kitchen supplies.</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="text-lg font-medium">Professional Chef Knife</h3>
            <p className="text-gray-600">Precision-crafted for professional chefs</p>
            <p className="mt-2 font-bold">$89.99</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-lg font-medium">Bamboo Cutting Board</h3>
            <p className="text-gray-600">Eco-friendly and durable</p>
            <p className="mt-2 font-bold">$29.99</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-lg font-medium">Stainless Steel Mixing Bowls</h3>
            <p className="text-gray-600">Set of 3 non-slip bowls</p>
            <p className="mt-2 font-bold">$39.99</p>
          </div>
        </div>
      </div>
      <Link href="/catalog" className="mt-6 inline-block bg-blue-500 text-white p-3 rounded-lg">
        Browse Full Catalog
      </Link>
    </div>
  );
}
