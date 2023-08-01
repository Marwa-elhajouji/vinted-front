import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
const CheckoutForm = ({paymentInfos}) => {
    const [confirmMessage, setConfirmMessage] = useState("");
    const { amount, title } = paymentInfos;
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const cardElement = elements.getElement(CardElement);
  
      const stripeResponse = await stripe.createToken(cardElement, {
        name: paymentInfos.ownerID,
      });
      
      const stripeToken = stripeResponse.token.id;
      
      try {
        const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/payment", {
          stripeToken: stripeToken,
          title : title,
          amount : paymentInfos.amount
        });
        if (response.data.status === "succeeded") {
          setConfirmMessage("Paiement validé !");
        } else {
          alert("Le paiement n'a pas été effectué !");
        }
      } catch (error) {
        // console.log(error.response);
      }
    };
  
    return (
      <main>
        {confirmMessage ? (
          <p>{confirmMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Pay</button>
          </form>
        )}
      </main>
    );
  };
  
  export default CheckoutForm;
  