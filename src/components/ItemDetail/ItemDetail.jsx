import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, cover, price, stock, category, description }) => {
    return (
        <div className="cardDetContainer">
            <p className="cardDetTitle">{title}</p>
            <div className="cardDetails">
                <img className="cardDetCover" src={`../../../public/images/${cover}`} alt={title} />
                <div className="productDetails">
                    <p className="cardDetPrice">${price}</p>
                    <p className="cardDetDesc"><b>Descripcion:</b> {description} </p>
                    <p className="cardDetCateg"><b>Categoría:</b> {category}</p>
                    <p className="cardDetStock">Stock disponible: {stock}</p>
                    <ItemCount minimum={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
                </div>
            </div>
        </div>
    )
};

export default ItemDetail