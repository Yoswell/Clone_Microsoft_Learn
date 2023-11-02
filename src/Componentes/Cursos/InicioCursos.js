import React, { useState, useEffect } from "react";
import "../../Css/SectionInicio.css";
import image from "../../Logo/cursos.png";
import { HiOutlineSearch } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

function InicioCursos() {
    const [cursosClose, setCursosClose] = useState(0);

    const handleClick = () => {
        setCursosClose(cursosClose + 1);
    }

    useEffect(() => {
        switch(cursosClose) {
            case 1 :
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.portada').style.display       = 'flex';
                setCursosClose(0);
            break;
        }
    }, [cursosClose]);

    return (
        <div className="inicio">
            <div className="cont-inicio">
                <p className="seccion">Cursos
                    <button className="seccion-link" onClick={handleClick}>Inicio
                        <i><MdKeyboardArrowRight /></i>
                    </button>
                </p>
                <h1 className="title-inicio">Descubre su ruta de aprendizaje</h1>
                <p className="text-sm">Tanto si es un principiante como si es un profesional con experiencia, nuestro enfoque práctico te ayuda a lograr tus objetivos en menos tiempo, con más confianza y a tu propio ritmo.</p>
                <div className="buscador">
                    <button className="examinar">Examinar rutas de aprendizaje</button>
                    <button className="btn btn-search">
                        <i><HiOutlineSearch /></i>Personalizar mi ruta de acceso
                    </button>
                </div>
            </div>
            <div className="cont-image">
                <img src={image} />
            </div>
        </div>
    );
}

export default InicioCursos;