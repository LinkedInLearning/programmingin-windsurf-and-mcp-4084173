"use client";

import { useState } from 'react';

export default function CheckoutPage() {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add coupon validation logic here
    setAppliedCoupon(couponCode);
  };

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
        <div className="mb-4 p-4 border rounded">
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="border p-2 flex-1"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
          {appliedCoupon && (
            <p className="text-green-600 mt-2 text-sm">Coupon {appliedCoupon} applied!</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full">Place Order</button>
      </form>
    </div>
  );
}
