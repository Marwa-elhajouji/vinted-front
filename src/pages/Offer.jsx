import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/offer.css"

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm.jsx"

const stripePromise = loadStripe("pk_test_51HKhKtIpzGbJyJGhZIOwzPwZXOYBsmNd8bkUYb2Sk5IMm4KcQAs5TL5O2iM7ZNcoOxnZm38hLkcNIRxP3Vvobxii00ESBKbnMO");

const Offer = () => {
  const [offerInfos, setOfferInfos] = useState({})
  const [isLoading, setIsLoading] = useState(true)
console.log('useParams()', useParams());
  const { id } = useParams();
  // const paymentInfos = {
  //   Id: offerInfos.owner._id,}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id} `
        )
        console.log(data);
        setOfferInfos(data)
        setIsLoading(false)
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchData()
  }, [])

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="container offer-page">
        <div>
          <img src={offerInfos.product_pictures[0].secure_url} alt="" />
        </div>
        <div>
          <p>{offerInfos.product_price} €</p>
        
        <div>
          {offerInfos.product_details.map((elem)=>{
            const keyName=Object.keys(elem)[0]
          
            return (<div>
               {keyName} : {elem[keyName]}
               </div>)
          })}
        </div>
<Link to ="/payment"
state={{
  amount : offerInfos.product_price,
  title : offerInfos.product_name,
  ownerID : offerInfos.owner._id
}}
>Acheter</Link>

        </div>
      </div>
    </main>
  )
}
export default Offer
