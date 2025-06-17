export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form>
        <table className="mb-4 w-full bg-gray-50 rounded shadow">
          <tbody>
            <tr>
              <td className="pr-4 py-2">
                <label htmlFor="name" className="block">Name</label>
              </td>
              <td>
                <input type="text" id="name" className="border p-2 w-full bg-white" />
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">
                <label htmlFor="address" className="block">Address</label>
              </td>
              <td>
                <textarea id="address" className="border p-2 w-full bg-white"></textarea>
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">
                <label htmlFor="card" className="block">Credit Card</label>
              </td>
              <td>
                <input type="text" id="card" className="border p-2 w-full bg-white" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Place Order</button>
      </form>
    </div>
  );
}
