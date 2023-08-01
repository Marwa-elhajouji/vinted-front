import { Link } from "react-router-dom"
import logo from "../images/logo.jpg"
import "../styles/header.css"
const Header=({userToken, setUserToken})=>{
    return (    <div className="element-header">
    
    <Link to="/" ><img src={logo} alt=""/></Link>
    <div className="barre-recherche">Recherche</div>
    {/* <BarreDeRecherche/> */}
    <div className="buttons">
        
   { userToken ? (
    <>
    {/* <button>Déposer une annonce</button> */}
    <Link to="/publish">Déposer une annonce</Link>
    <button onClick={()=>{
        setUserToken("");
    }

    }>Se déconecter</button></>
    
   ):(
   <>
   <Link to ="/signup">S'inscrire</Link>
   
   <Link to ="/login">Se connecter</Link>
   
   {/* <button>Vider les articles</button> */}
   </>
)}
<Link to="/publish">Déposer annonce</Link>
    </div>
</div>)



}
export default Header