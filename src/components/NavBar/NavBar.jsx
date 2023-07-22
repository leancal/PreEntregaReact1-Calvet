import "./NavBar.css";
import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <nav className="navBarContainer">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <NavLink to={ "" } className={ ({ isActive})=> isActive ? "activeNavBarButton" : "navBarButton" }>Productos</NavLink>
            <NavLink to={ "category/camperas" } className={ ({ isActive})=> isActive ? "activeNavBarButton" : "navBarButton" }>Camperas</NavLink> 
            <NavLink to={ "category/remeras" } className={ ({ isActive})=> isActive ? "activeNavBarButton" : "navBarButton" }>Remeras</NavLink> 
            <CartWidget />
        </nav>
    );
}
export default NavBar;