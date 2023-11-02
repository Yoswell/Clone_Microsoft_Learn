import React from "react";
import "../../Css/Rutas.css";
import { FiClock } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";

function CursosCards(props) {
    return (
        <div className="card-wrap">
            <div className="card-wrap-recursos cursos-card">
                <div>
                    <h2 className="seccion">{props.seccion}</h2>
                    <a className="title-card-recursos cursos-title">{props.title}</a>
                </div>
                <div className="tiempo-y-herramienta">
                    <div className="paddingB2">
                        <p className="info-cursos text-recursos d-flex"><i className="clock"><FiClock /></i>{props.tiempo}</p>
                        <p className="info-cursos text-recursos">{props.herramienta}</p>
                    </div>
                    <div className="image-cursos">
                        <img className="svgLogo" src={props.image} />
                    </div>
                </div>
                <div className="sum">
                    <button className="sumar-curso"><BiPlusCircle />Sumar</button>
                </div>
            </div>
        </div>
    );
}

export default CursosCards;