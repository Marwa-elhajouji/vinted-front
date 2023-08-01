import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/login.css"
import axios from "axios"
import Cookies from "js-cookie"


const Login = ({ setUserToken }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault()
    if(!email || !password){
setErrorMessage("Veuillez saisir tous les champs!")
    }else{
        try {
         const {data}= await axios.post(" https://lereacteur-vinted-api.herokuapp.com/user/login",{
            email,
            password
         })   
         Cookies.set("token", data.token);
         setUserToken(data.token);
         navigate("/")
        } catch (error) {
            console.log("error", error);
            setErrorMessage("Erreur survenue!")
        }
    }
  }
  return (
    <main>
      <div className="container">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            value={email}
            onChange={(event) => {
                setErrorMessage("")
              setEmail(event.target.value)
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(event) => {
                setErrorMessage("")
              setPassword(event.target.value)
            }}
          />
          <button>Se connecter</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </main>
  )
}
export default Login
