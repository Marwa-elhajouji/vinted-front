import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/App.css"
import { useState } from "react"
import Cookies from "js-cookie"


import Home from "./pages/Home"
import Offer from "./pages/Offer"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import Login from "./pages/Login"
import Publish from "./pages/Publish"
import Payment from "./pages/Payment"

function App() {
  const [userToken, setUserToken]=useState("")
  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup setUserToken={setUserToken} />} />
        <Route path="/login" element={<Login userToken ={userToken}setUserToken={setUserToken}/>}/>
        <Route path="/publish" element={<Publish userToken={userToken}/>}/>
     <Route path="/payment" element={<Payment userToken={userToken}/>}/>
      </Routes>
    </Router>
  )
}

export default App
