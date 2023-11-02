import React from "react";

function TestimoniosCard(props) {
    return (
        <div className="card-wrap-testi">
            <div className="d-flex">
                <div className="testi-image">
                <img src={props.image} /> 
                </div>
                <div className="nombres-testi">
                    <h2 className="title-testi">{props.nombre}</h2>
                    <h3 className="text-testi">{props.cargo}</h3>
                </div>
            </div>
            <p className="text-testi-description">{props.texto}</p>
            <div className="cont-button-level">
                <a className="a-link"><a>{props.boton}</a></a>
            </div>
        </div>
    );
}

export default TestimoniosCard;