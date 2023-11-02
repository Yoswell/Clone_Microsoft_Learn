import React, { useState, useEffect } from "react";
import image from "../../Logo/Q&A.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../Css/SectionPreguntas.css";

function InicioPreguntas() {
    const [preguntasClose, setPreguntasClose] = useState(0);
    
    const handleClick = () => {
        setPreguntasClose(preguntasClose + 1);
    }

    useEffect(() => {
        switch(preguntasClose) {
            case 1 :
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.documentacion').style.display = 'none';
                document.querySelector('.preguntas').style.display = 'none';
                document.querySelector('.portada').style.display = 'flex';
                setPreguntasClose(0);
            break;
        }
    }, [preguntasClose]);

    return (
        <div className="inicio inicio-pregunts">
            <div className="cont-inicio">
                <div className="esp">
                    <p className="seccion esp">Bienvenido a preguntas y respuestas de microsoft</p>
                    <button className="seccion-link link-esp" onClick={handleClick}>Inicio
                        <i><MdKeyboardArrowRight /></i>
                    </button>
                </div>
                <h1 className="title-inicio">¿Con qué necesitas ayuda hoy?</h1>
                <p className="text-sm paddingB2">Encuéntrelo en Preguntas y respuestas, el hogar de preguntas y respuestas técnicas en Microsoft. ¿Nuevo en preguntas y respuestas? Vea nuestro artículo de introducción a continuación.</p>
            </div>
            <div className="cont-image">
                <img src={image} />
            </div>
        </div>
    );
}

export default InicioPreguntas;  