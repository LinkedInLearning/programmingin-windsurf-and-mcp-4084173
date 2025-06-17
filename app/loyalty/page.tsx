export default function LoyaltyPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Loyalty Program</h1>
      <p>You have 500 points.</p>
      <h2 className="text-xl mt-4">Rewards</h2>
      <ul className="list-disc pl-5">
        <li>100 points: $5 discount</li>
        <li>200 points: Free shipping</li>
        <li>500 points: $20 discount</li>
      </ul>
    </div>
  );
}
