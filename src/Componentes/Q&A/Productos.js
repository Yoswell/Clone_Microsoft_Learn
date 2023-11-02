import React from "react";
import "../../Css/SectionPreguntas.css";

function Productos(props) {
    return (
        <div className="cardProductos">
            <div className="cont-image-productos">
                <img src={props.image} />
            </div>
            <div className="cont-info-productos">
                <a className="enlaces-datos">{props.enlace}</a>
                <p className="text-sm-sm">{props.texto}</p>
            </div>
        </div>
    );
}

export default Productos;