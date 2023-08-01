import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState({})
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [city, setCity] = useState("")
  const [brand, setBrand] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  //   const[errorMessage, setErrorMessage]=useState("")
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userToken) {
      navigate("/login");
      return;
    }

    const formData= new FormData();
    formData.append("picture", picture);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              "Content-Type": "multipart/form-data"
            }
          }
        )
        setIsPublished(true)
        //   alert(JSON.stringify(response.data));
        console.log(response.data)
      } catch (error) {
        // console.log("Error details:", error.response.data)
        // console.log("Error status:", error.response.status)
        // console.log("Error headers:", error.response.headers)
        console.log("error", error.response);
      }
  }
  

    return  (
      <>
      <section>
        <div className="container">
          {isPublished && <p>Publié! </p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="picture">Photo</label>
            <input
              type="file"
             id="picture"
              onChange={(event) => {
                setPicture(event.target.files[0])
              }}
            />
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="title"
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              placeholder="price"
              onChange={(event) => {
                setPrice(event.target.value)
              }}
            />
            <label htmlFor="description">Décris ton article</label>
          <input
            type="text"
            id="descripton"
            onChange={(event) => {
              setDescription(event.target.value) ;
            }}
            value={description}
          />
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            id="brand"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
          />
          <label htmlFor="size">Taille</label>
          <input
            type="text"
            id="size"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            value={size}
          />
          <label htmlFor="color">Couleur</label>
          <input
            type="text"
            id="color"
            onChange={(event) => {
               setColor(event.target.value)
            }}
            value={color}
          />
           <label htmlFor="city">Lieu</label>
          <input
            type="text"
            id="city"
            onChange={(event) => {
              setCity(event.target.value)
            }}
            value={city}
          />
            <button>Ajouter</button>

            {/* <input 
            type="submit"
            /> */}
          </form>
        </div>
      </section>
      </>) 



    }
      
      
      
      
    
      // </>



    // )



  
  // useEffect(() => {
  //   if (!userToken) {
  //     navigate("/login")
  //   }
  // }, [userToken, navigate])


    

  // return (
    // <>
    //   <section>
    //     <div className="container">
    //       {isPublished && <p>Publié! </p>}
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="file"
    //           onChange={(event) => {
    //             setPicture(event.target.files[0])
    //           }}
    //         />
    //         <label htmlFor="title">Titre</label>
    //         <input
    //           type="text"
    //           name="title"
    //           id="title"
    //           value={title}
    //           placeholder="title"
    //           onChange={(event) => {
    //             setTitle(event.target.value)
    //           }}
    //         />
    //         <input
    //           type="number"
    //           name="price"
    //           id="price"
    //           value={price}
    //           placeholder="price"
    //           onChange={(event) => {
    //             setPrice(event.target.value)
    //           }}
    //         />
    //         <button>Ajouter</button>

    //         {/* <input 
    //         type="submit"
    //         /> */}
    //       </form>
    //     </div>
    //   </section>
    // </>
  // )
// }
export default Publish
