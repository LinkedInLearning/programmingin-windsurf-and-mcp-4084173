import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Kitchen Supply Co.</h1>
        <p className="text-xl text-text-light max-w-2xl mx-auto">Your one-stop shop for premium kitchen supplies, where quality meets tradition.</p>
      </header>
      
      <div className="mt-12">
        <h2 className="text-4xl font-semibold mb-8 text-center border-b-2 border-accent pb-2 inline-block mx-auto">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
            <h3 className="text-2xl font-medium text-primary mb-2">Professional Chef Knife</h3>
            <p className="text-text-light mb-4">Precision-crafted for professional chefs</p>
            <p className="text-2xl font-bold text-primary">$89.99</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
            <h3 className="text-2xl font-medium text-primary mb-2">Bamboo Cutting Board</h3>
            <p className="text-text-light mb-4">Eco-friendly and durable</p>
            <p className="text-2xl font-bold text-primary">$29.99</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
            <h3 className="text-2xl font-medium text-primary mb-2">Stainless Steel Mixing Bowls</h3>
            <p className="text-text-light mb-4">Set of 3 non-slip bowls</p>
            <p className="text-2xl font-bold text-primary">$39.99</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Link 
          href="/catalog" 
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 inline-block"
        >
          Browse Full Catalog
        </Link>
      </div>
    </div>
  );
}
