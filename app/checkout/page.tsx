const withSalesTax = (price: number) => {
  return price * 1.05;
}

const salesTax = () => {
  return withSalesTax(89.99) - 89.99;
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">Address</label>
          <textarea id="address" className="border p-2 w-full"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="card" className="block mb-2">Credit Card</label>
          <input type="text" id="card" className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Place Order</button>
      </form>
    </div>
  );
}
