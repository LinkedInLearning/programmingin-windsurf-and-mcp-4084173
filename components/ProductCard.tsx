import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="border p-4 mb-2">
      <h2 className="text-xl">{product.name}</h2>
      <p>${product.price?.toFixed(2)}</p>
    </li>
  );
}
