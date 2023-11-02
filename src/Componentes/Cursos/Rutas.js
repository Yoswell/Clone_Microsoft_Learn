import React from "react";
import "../../Css/Rutas.css";
import RutasCard from "./RutasCards.js";
import CursosCard from "./CursosCards";

import sobrecapa from "../../Logo/sobrecapa.png";
import tress from "../../Logo/tres.png";
import pc from "../../Logo/pc.png";
import uno from "../../Logo/1.svg";
import dos from "../../Logo/2.svg";
import tres from "../../Logo/3.svg";
import cuatro from "../../Logo/4.svg";
import cinco from "../../Logo/5.svg";
import seis from "../../Logo/6.svg";
import siete from "../../Logo/7.svg";
import ocho from "../../Logo/8.svg";
import nueve from "../../Logo/9.svg";
import diez from "../../Logo/10.svg";
import once from "../../Logo/11.svg";
import doce from "../../Logo/12.svg";

import { MdKeyboardArrowRight } from "react-icons/md";

function Testimonios() {
    return (
        <div className="cont-rutas paddingB1">
            <div className="rutas">
                <RutasCard 
                    image={sobrecapa}
                    nombre="Rutas de aprendizaje"
                    cargo="Aprende siguiendo tu propia programación"
                    texto="Explora un tema en profundidad con rutas quiadas o aprende a realizar una tarea específica con módulos individuales."
                    boton="Explora las rutas de aprendizaje y los módulos"
                />
                <RutasCard 
                    image={tress}
                    nombre="Rutas profesionales"
                    cargo="Busque su ruta profesional"
                    texto="Obtenga más información sobre las rutas profesionales que le interesan, siga rutas de aprendizaje guiadas que le ayudarán a obtener certificaciones y a mantenerse conectado para alcanzar sus objetivos profesionales."
                    boton="Explore las rutas profesionales"
                />
                <RutasCard 
                    image={pc}
                    nombre="Centro de estudiantes"
                    cargo="Recursos para estudiantes"
                    texto="Aprende habilidades técnicas para prepararte para tu futuro. Encuentra cursos, eventos virtuales y oportunidades con la comunidad de estudiantes de desarrollo de Microsoft."
                    boton="Explorar el Centro de estudiantes"
                />
            </div>
            <div className="cont-cursos">
                <h2 className="title-inicio cursos-title-inicio paddingT5">Rutas de aprendizaje y módulos populares</h2>
                <div className="rutas">
                    <CursosCard 
                        seccion="Ruta de aprendizaje"
                        title="Aspectos básicos de Microsoft Azure: Descripción de los conceptos de nube"
                        tiempo="52min"
                        herramienta="Azure • Administrador • Pincipiante"
                        image={uno}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Introducción a la inteligencia artificial en Azure"
                        tiempo="34min"
                        herramienta="Azure • Ingeniero de IA • Pincipiante"
                        image={dos}
                    />
                    <CursosCard 
                        seccion="Ruta de aprendizaje"
                        title="Aspectos básicos de Azure: Descripción de la arquitectura y los servicios de Azure"
                        tiempo="3h 23min"
                        herramienta="Azure • Administrador • Pincipiante"
                        image={tres}
                    />
                    <CursosCard 
                        seccion="Ruta de aprendizaje"
                        title="Aspectos básicos de Azure: Descripción de la administración y la gobernanza de Azure"
                        tiempo="1h 50min"
                        herramienta="Azure • Administrador • Pincipiante"
                        image={cuatro}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Descripción de las funcionalidades de Microsoft Power BI"
                        tiempo="48min"
                        herramienta="Microsoft Power Platform • Analista de negocios • Pincipiante"
                        image={cinco}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Introducción a Python en Visual Studio Code"
                        tiempo="28min"
                        herramienta="Visual Studio Code • Desarrollador • Pincipiante"
                        image={seis}
                    />

                    <CursosCard 
                        seccion="Ruta de aprendizaje"
                        title="Introducción al análisis de datos de Microsoft"
                        tiempo="1h 16min"
                        herramienta="Microsoft Power Platform • Analista de datos • Intermedio"
                        image={siete}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Introducción a Azure OpenAI Service"
                        tiempo="38min"
                        herramienta="Azure • Ingeniero de IA • Pincipiante"
                        image={ocho}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Describir el valor empresarial de Microsoft Power Platform"
                        tiempo="50min"
                        herramienta="Microsoft Power Platform • Analista de negocios • Pincipiante"
                        image={nueve}
                    />
                    <a></a>
                        <div className="cont-cursos-link"><a className="title-card-recursos cursos-link">Ver lo que otros estan aprendiendo<i><MdKeyboardArrowRight /></i></a></div>
                    <a></a>
                </div>
            </div>
            <div className="cont-cursos">
                <h2 className="title-inicio cursos-title-inicio paddingT5">Nuestros favoritos actuales</h2>
                <div className="rutas">
                    <CursosCard 
                        seccion="Módulo"
                        title="Introducción al Marco de arquitectura de Microsoft Azure"
                        tiempo="1h 4min"
                        herramienta="Azure • Arquitecto de soluciones • Pincipiante"
                        image={diez}
                    />
                    <CursosCard 
                        seccion="Módulo"
                        title="Creación y publicación de una aplicación web estática con Gatsby y Azure Static Web Apps"
                        tiempo="31min"
                        herramienta="Azure • Desarrollador • Pincipiante"
                        image={once}
                    />
                    <CursosCard 
                        seccion="Ruta de aprendizaje"
                        title="Automatización de las tareas de desarrollo mediante Acciones de GitHub"
                        tiempo="49min"
                        herramienta="GitHub • Ingeniero de DevOps • Pincipiante"
                        image={doce}
                    />
                </div>
            </div>
        </div>
    );
}

export default Testimonios;