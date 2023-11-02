import React from "react";
import "../../Css/SectionLevels.css";

function LevelCards(props) {
    return (
        <div className="card-wrap d-flex">
            <div className="card-wrap-testi level">
                <h2 className="title-card">{props.title}</h2>
                <p className="text-testi-description">{props.texto}</p>
                <div className="cont-button-level">
                    <a className="a-link"><a>{props.boton}</a></a>
                </div>
            </div>
        </div>
    );
}

export default LevelCards;