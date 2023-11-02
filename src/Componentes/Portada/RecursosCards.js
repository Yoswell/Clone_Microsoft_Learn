import React from "react";
import "../../Css/SectionRecursos.css";

function RecursosCard(props) {
    return (
        <div className="card-wrap d-flex">
            <div className="card-wrap-recursos">
                <a className="title-card-recursos">{props.title}</a>
                <p className="text-recursos">{props.texto}</p>
            </div>
        </div>
    );
}

export default RecursosCard;