import React from "react";
import "../../Css/Rutas.css";

function Rutas(props) {
    return (
        <div className="card-wrap-testi rutas-card">
            <div className="d-flex card-rutas">
                <div className="testi-image rutas-image">
                    <img src={props.image} /> 
                </div>
                <div className="nombres-testi">
                    <div>
                        <h2 className="seccion seccion-rutas">{props.nombre}</h2>
                        <h3 className="text-testi ">{props.cargo}</h3>
                        <p className="text-testi-description rutas-description">{props.texto}</p>
                    </div>
                    <div className="cont-button-level">
                        <a className="a-link rutas-link"><a>{props.boton}</a></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rutas;