import React from "react";
import "../../Css/SectionPrograma.css";

function Destacados(props) {
    return (
        <div className="cardDestacados">
            <div className="cont-image-destacados">
                <img src={props.image} />
            </div>
            <div className="cont-info-destacados">
                <a className="enlaces-datos">{props.enlace}</a>
                <p className="text-sm paddingT">{props.texto}</p>
            </div>
        </div>
    );
}

export default Destacados;