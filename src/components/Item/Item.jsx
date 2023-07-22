import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, cover, price }) => {
    return (
        // <div className="cardContainer">
        //     <p className="cardTitle">{ title }</p>
        //     <img className="cardCover" src={ `../images/${cover}` } alt={ title } />
        //     <p className="cardPrice">${ price }</p>            
        //     <Link to= { `/item/${ id }` } className="cardButton">Ver Detalle </Link> 

        // </div>
        <div className=" page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={ `../images/${cover}` } alt={ title }/>
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">{ title }</span>
                                    </div>
                                    <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                                </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href="#">
                                <span className="price">${ price }</span>
                                <span className="add-to-cart">
                                <Link to= { `/item/${ id }` } className="txt">Ver Detalle </Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Item;