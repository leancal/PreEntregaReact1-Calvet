import "./ItemCount.css";
import { useState } from "react";

const ItemCount = (props) => {

    const [quantity, setQuantity] = useState(props.minimum);

    return (
        <div className="countContainer">
            <div className="counter">
                <button className="button" onClick={() => { (quantity > 1) && setQuantity(quantity - 1) }}>-</button>
                <p className="number">{quantity}</p>
                <button className="button" onClick={() => { (quantity < props.stock) && setQuantity(quantity + 1) }}>+</button>
            </div>
            <button className="button" onClick={() => props.onAdd(quantity)} disabled={!props.stock}>Agregar al Carrito</button>
        </div>
    );

};

export default ItemCount;
