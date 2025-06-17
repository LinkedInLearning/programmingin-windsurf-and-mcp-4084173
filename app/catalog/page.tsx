import ProductCard from '@/components/ProductCard';

export default function CatalogPage() {
  const products = [
    { id: 1, name: 'Chef Knife', price: 89.95 },
    { id: 2, name: 'Cutting Board', price: 29.19 },
    { id: 3, name: 'Mixing Bowls', price: 39.65 },
    { id: 4, name: 'Grill', price: 199.95 },
    { id: 5, name: 'Measuring Cups', price: 19.95 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
