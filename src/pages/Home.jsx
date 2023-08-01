import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import OfferCard from "../components/OfferCard"
import Offer from "./Offer"
import "../styles/home.css"
const Home = () => {
  const [offersList, setOffersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        )
        setOffersList(response.data.offers)
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
      <div className="container offers-bloc">
        {offersList.map((offer) => {
          return (
            <OfferCard key={offer._id} offer={offer}/>
            // <Link to={`/offer/${offer._id}`} key={offer._id}>
            //   <div className="offer-card">
            //     <div>
            //       <img
            //         src={offer.owner.account.avatar.secure_url}
            //         alt=""
            //         className="avatar"
            //       />
            //       <p>{offer.owner.account.username}</p>
            //     </div>
            //     <img src={offer.product_image.secure_url} alt="" />
            //     <div>
            //       <p>{offer.product_price} €</p>
            //     </div>
            //   </div>
            // </Link>
          )
        })}
      </div>
    </main>
  )
}
export default Home
