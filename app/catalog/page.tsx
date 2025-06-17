import ProductCard from '@/components/ProductCard';

import { products } from '../data/products';

export default function CatalogPage() {

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
