import cart from "./assets/cart.png";
import "./CartWidget.css";

const CartWidget = () =>{
    return(
        <div className="cartIcon">
        <img src={ cart } alt="carrito de compras" />
        <span>3</span>
        </div>
    );
};

export default CartWidget;