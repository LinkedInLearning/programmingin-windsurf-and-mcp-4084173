export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export const products: Product[] = [
  // Existing products
  {
    id: 1,
    name: 'Professional Chef Knife',
    price: 89.99,
    description: 'Precision-crafted for professional chefs'
  },
  {
    id: 2,
    name: 'Bamboo Cutting Board',
    price: 29.99,
    description: 'Eco-friendly and durable'
  },
  {
    id: 3,
    name: 'Stainless Steel Mixing Bowls',
    price: 39.99,
    description: 'Set of 3 non-slip bowls'
  },
  {
    id: 4,
    name: 'Premium Grill',
    price: 199.95,
    description: 'Professional-grade outdoor grill'
  },
  {
    id: 5,
    name: 'Measuring Cups Set',
    price: 19.95,
    description: 'Precise measurements for perfect recipes'
  },
  
  // Kitchen supplies from Supabase
  {
    id: 6,
    name: 'Spatula',
    price: 10.00,
    description: 'High heat resistant kitchen tool'
  },
  {
    id: 7,
    name: 'Paring Knife',
    price: 5.25,
    description: 'Perfect for peeling and slicing small fruits and vegetables'
  },
  {
    id: 8,
    name: 'Slotted Spoon',
    price: 6.35,
    description: 'Ideal for draining liquids from food'
  }
];
