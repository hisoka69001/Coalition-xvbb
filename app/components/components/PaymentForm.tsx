'use client'
export default function PaymentForm() {
  const handleStripe = () => {
    window.location.href = 'https://checkout.stripe.com/pay/YOUR_STRIPE_SESSION_ID'
  }

  const handlePayPal = () => {
    window.location.href = 'https://www.paypal.com/paypalme/YOUR_PAYPAL_USERNAME'
  }

  return (
    <div className="my-4 w-full max-w-xl text-center">
      <h2 className="text-lg font-semibold mb-2">💰 Soutiens ce projet</h2>
      <button onClick={handleStripe} className="bg-purple-600 text-white p-2 w-full mb-2">
        Payer avec Stripe
      </button>
      <button onClick={handlePayPal} className="bg-yellow-500 text-white p-2 w-full">
        Payer avec PayPal
      </button>
    </div>
  )
}
