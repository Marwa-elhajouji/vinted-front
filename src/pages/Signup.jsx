// // import { useEffect, useState } from "react"
// import { useState } from "react"
// import "../styles/signup.css"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"

// const Signup = () => {
//   const navigate = useNavigate()

//   const [isChecked, setIsChecked] = useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//     newsletter: false
//   })
//   const handleCheckedboxChange = () => {
//     setIsChecked(!isChecked)
//   }
//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }))
//   }
//   useEffect(() => {
//     let isFormSubmitted = false
//     const fetchData = async () => {
//       try {
//         if (isFormSubmitted) {
//           const response = await axios.post(
//             "https://lereacteur-vinted-api.herokuapp.com/user/signup",
//             formData
//           )
//           Cookies.set("userToken", response.data.token);
//           navigate("/");

//         }
//       } catch (error) {
//         console.log("erorr", error)
//       }
//     }
//     fetchData()
//   }, [])
//   return (
//     <div>
//       <div className="container-signup">
//         <h2>S'inscrire</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault()
//           }}>
//           <input
//             type="text"
//             placeholder="Nom d'utilisateur"
//             onChange={handleChange}
//           />
//           <input type="email" placeholder="Email" onChange={handleChange} />
//           <input
//             type="password"
//             placeholder="Mot de passe"
//             onChange={handleChange}
//           />
//           <label>
//             {" "}
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckedboxChange}
//             />{" "}
//             S'inscrire à notre newsletter
//           </label>
//           <p>En m'inscrivant..</p>
//           <button onClick={() => navigate("/")}>S'inscrire</button>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default Signup
import axios from "axios"
import Cookies from "js-cookie"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/signup.css"

const Signup = ({setUserToken}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email || !username || !password) {
      setErrorMessage("Veuillez remplir tous les champs!")
    } else {
      try {
        const {data} = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            email,
            username,
            password,
            newsletter,
          }
        );
        Cookies.set("token", data.token)
        setUserToken(data.token);
        navigate("/");
      } catch (error) {
        console.log("error", error)
        setErrorMessage("Erreur survenue!")
      }
    }
  }
  return (
    <main>
      <div className="container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setErrorMessage("")
              setUsername(event.target.value)
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setErrorMessage("")
              setEmail(event.target.value)
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setErrorMessage("")
              setPassword(event.target.value)
            }}
          />
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(!newsletter)
            }}
          />
          <label htmlFor="newsletter">NewsLetter</label>
          <button>S'inscrire</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </main>
  )
}
export default Signup
