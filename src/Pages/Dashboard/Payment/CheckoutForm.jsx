import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
        const {user} = useAuth()
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [cart] = useCart()
  const totalPrice = cart.reduce((total,item) => total + item.price,0)
  const [clientSecret, setClientSecret] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

//     confirm payment-----------------
const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
                card: card, 
                billing_details: {
                        user: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                }

        }
})
if(confirmError){
        console.log('confirm error',confirmError)
}
else{
        console.log('paymennt intent',paymentIntent)
}
  };

  useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then((res) => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
        })
        
  },[axiosSecure, totalPrice])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
