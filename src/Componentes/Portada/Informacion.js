import React, { useState, useEffect } from "react";
import "../../Css/SectionInformacion.css";
import rosa from "../../Logo/rosa.jpg";
import celeste from "../../Logo/celeste.jpg";
import azul from "../../Logo/azul.jpg";
import piel from "../../Logo/piel.jpg";
import azulO from "../../Logo/azulOscuro.jpg";
import morado from "../../Logo/morado.jpg";

function Informacion() {
    const [cursosOpen, setCursosOpen] = useState(0);
    const [documentacionOpen, setDocumentacionOpen] = useState(0);
    const [preguntasOpen, setPreguntasOpen] = useState(0);
    const [programaOpen, setProgramaOpen] = useState(0);

    const handleClick = () => {
        setCursosOpen(cursosOpen + 1);
    }
    const handleClickDocumentacion = () => {
        setDocumentacionOpen(documentacionOpen + 1);
    }
    const handleClickPreguntas = () => {
        setPreguntasOpen(preguntasOpen + 1);
    }
    const handleClickPrograma = () => {
        setProgramaOpen(programaOpen + 1);
    }

    useEffect(() => {
        switch(cursosOpen) {
            case 1 :
                document.querySelector('.aprendeHaciendo').style.display = 'flex';
                document.querySelector('.portada').style.display         = 'none';
                setCursosOpen(0);
            break;
        }
    }, [cursosOpen]);

    useEffect(() => {
        switch(documentacionOpen) {
            case 1 :
                document.querySelector('.documentacion').style.display   = 'flex';
                document.querySelector('.portada').style.display         = 'none';
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                setDocumentacionOpen(0);
            break;
        }
    }, [documentacionOpen]);

    useEffect(() => {
        switch(preguntasOpen) {
            case 1 :
                document.querySelector('.preguntas').style.display       = 'flex';
                document.querySelector('.portada').style.display         = 'none';
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.documentacion').style.display   = 'none';
                setPreguntasOpen(0);
            break;
        }
    }, [preguntasOpen]);

    useEffect(() => {
        switch(programaOpen) {
            case 1 :
                document.querySelector('.programa').style.display        = 'flex';
                document.querySelector('.portada').style.display         = 'none';
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.documentacion').style.display   = 'none';
                document.querySelector('.preguntas').style.display       = 'none';
                setProgramaOpen(0);
            break;
        }
    }, [programaOpen]);

    return (
        <div className="informacion">
            <div className="cards">
                <div className="card-wrap-info">
                    <div className="card">
                        <img className="cards-img" src={rosa} />
                        <h2 className="title-sm">Aprende haciendo</h2>
                        <p className="text">Adquiera los conocimientos que pueda aplicar a situaciones cotidianas mediante cursos prácticos personalizados para sus necesidades, a su propio ritmo o con nuestra red global de asociados de aprendizaje.</p>
                        <div className="cont-button">
                            <button className="btn-curso" onClick={handleClick}>
                                <a>Tomar un curso de capacitación</a>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="cards-img" src={celeste} />
                        <h2 className="title-sm">Busque documentación técnica</h2>
                        <p className="text">Obtenga herramientas e instrucciones paso a paso que le ayuden a sacar el máximo partido a productos de Microsoft como Azure, Windows, Office, Dynamics, Power Apps, Teams, etc.</p>
                        <div className="cont-button">
                            <button className="btn-curso" onClick={handleClickDocumentacion}>
                                <a>Ver la documentación</a>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="cards-img" src={azul} />
                        <h2 className="title-sm">Presente sus conocimientos</h2>
                        <p className="text">Avance en su carrera profesional completando desafíos que demuestren su experiencia. Obtenga certificaciones reconocidas a nivel mundial y aprobadas por el sector, y preséntelas a su red</p>
                        <div className="cont-button">
                            <button className="btn-curso">
                                <a>Obtenga certificados</a>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="cards-img" src={piel} />
                        <h2 className="title-sm">Formule preguntas y obtenga ayuda</h2>
                        <p className="text">Póngase en contacto con otros alumnos y expertos, formule preguntas y respuestas, comparta recursos y aprenda con todos.</p>
                        <div className="cont-button">
                            <button className="btn-curso" onClick={handleClickPreguntas}>
                                <a>Exploración de Preguntas y respuestas</a>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="cards-img" src={azulO} />
                        <h2 className="title-sm">Pruebe ejemplos de código</h2>
                        <p className="text">Pruebe las nuevas funcionalidades en sus propios proyectos de forma más rápida y sencilla con ejemplos de código que implementen la tecnología Microsoft.</p>
                        <div className="cont-button">
                            <button className="btn-curso">
                                <a>Ver ejemplos</a>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="cards-img" src={morado} />
                        <h2 className="title-sm">"Vea nuevas formas de innovar</h2>
                        <p className="text">Descubra miles de vídeos divertidos, auténticos e informativos de Microsoft y expertos de la comunidad que le ayuden a su equipo y a usted a encontrar formas creativas de usar la tecnología.</p>
                        <div className="cont-button">
                            <button className="btn-curso" onClick={handleClickPrograma}>
                                <a>Ver programas</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacion;