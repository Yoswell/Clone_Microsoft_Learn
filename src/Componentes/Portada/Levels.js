import React from "react";
import LevelCards from "../Portada/LevelCards.js";
import "../../Css/SectionLevels.css";

function Levels() {
    return (
        <div className="cont">
            <h1 className="title-level"><span className="text-resalt">Mejore su nivel</span> con Microsoft Learn</h1>
            <div className="cont-cards">
                <LevelCards 
                    title="15 %"
                    texto="De media, los empleados que tienen una certificación ganan un 15 % más que los que no la tienen."
                    boton="Motivos para obtener la certificación"
                />
                <LevelCards 
                    title="61 %"
                    texto="Al obtener una certificación, el 61 % de los profesionales de la tecnología dicen que obtuvieron una promoción."
                    boton="Valor de certificación de TI de Person VUE 2021"
                />
                <LevelCards 
                    title="90 %"
                    texto="Los desarrolladores con una certificación de Microsoft son un 90 % más productivos y cerca de un 60 % más eficientes."
                    boton="Motivos para obtener la certificación"
                />
            </div>
        </div>
    );
}

export default Levels;