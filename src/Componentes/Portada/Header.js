import React from "react"; import { useState, useEffect } from "react";
import "../../Css/Nav.css";
import "../../Css/SectionMenu.css";
import logo from "../../Logo/microsoftLogo.png";
import Inicio from "../Portada/Inicio.js";
import Informacion from "../Portada/Informacion.js";
import Levels from "../Portada/Levels.js";
import Testimonios from "../Portada/Testimonios.js";
import Recursos from "../Portada/Recursos.js";
import Footer from "../Portada/Footer.js";
import Articulos from "../Documentación/Articulos.js";
import Datos from "../../Componentes/Q&A/Datos.js";

import InicioCursos from "../Cursos/InicioCursos.js";
import InicioDocumentacion from "../Documentación/InicioDocumentacion.js";
import InicioPreguntas from "../../Componentes/Q&A/InicioPreguntas.js";
import InicioPrograma from "../../Componentes/Programa/InicioPrograma.js";
import Rutas from "../Cursos/Rutas.js";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchStyle, setSearchStyle] = useState({});
    const [selectedButton, setSelectedButton] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [clickCountLinks, setClickCountLinks] = useState(0);
    const [mostrarSection, setMostrarSection] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    const handleBlur = () => { setSearchStyle({}); }
    const handleClick = () => { setSearchStyle({ border: "1px solid #75b6e7" }); }
    const mostrar = (index) => { setMostrarSection(index); }
    
    const handleClickMenu = () => {
        setClickCount(clickCount + 1);
        setMenuOpen(!menuOpen);
    }

    const handleClickLinks = () => { setClickCountLinks(clickCountLinks + 1); }
    const handleButtonClick = (index) => { setSelectedButton(index); }

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 850);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let menuStyleOne, menuStyleTwo, menuStyleThree, ocultarMenu, nav = {};
    switch(clickCount) {
        case 1 :
            menuStyleOne = { transform: 'rotate(45deg)', marginTop: "1px" }
            menuStyleTwo = { display: "none" }
            menuStyleThree = { transform: 'rotate(-45deg)', marginTop: "-3px" }
            ocultarMenu = { display: "flex"  }
            nav = { zIndex: "0" }
        break;
        case 2 :
            menuStyleOne = { transform: 'rotate(0deg)', marginTop: "0px" }
            menuStyleTwo = { display: "none", }
            menuStyleThree = { transform: 'rotate(0deg)', marginTop: "0px" }
            ocultarMenu = { display: "none"  }
            nav = { zIndex: "100" } 
            setClickCount(0);
        break;
    }

    if (isMobile === false) {
        ocultarMenu = { display: "none" }
    }

    let ocultarMenuLinks, buttonStyle = {};
    switch(clickCountLinks) {
        case 1: 
            ocultarMenuLinks = { display: "flex" }
            buttonStyle = { backgroundColor: "#2f2f2f" }
        break;
        case 2:
            ocultarMenuLinks = { display: "none" }
            buttonStyle = { backgroundColor: "#171717" }
            setClickCountLinks(0);
        break;
    }

    return (
        <><><nav className="nav" style={nav}>
            <div className="icon"> <img src={logo} />
                <h1 className="textLogo">Microsoft</h1>
                <div className="line"></div>
                <div className="nav-list display">
                <button className={`linksNav ${selectedButton === 0 ? "active" : ""}`} onClick={() => handleButtonClick(0)}>Learn</button>
                <button className={`linksNav ${selectedButton === 1 ? "active" : ""}`} onClick={() => handleButtonClick(1)}>Documentación</button>
                <button className={`linksNav ${selectedButton === 2 ? "active" : ""}`} onClick={() => handleButtonClick(2)}>Cursos</button>
                <button className={`linksNav Ocult6 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Cerfificaciones</button>
                <button className={`linksNav Ocult5 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Q&A</button>
                <button className={`linksNav Ocult4 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Ejemplos de código</button>
                <button className={`linksNav Ocult3 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Valoraciones</button>
                <button className={`linksNav Ocult2 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Programa</button>
                <button className={`linksNav Ocult1 ${selectedButton === 3 ? "active" : ""}`} onClick={() => handleButtonClick(3)}>Eventos</button>
                <div className="links-desplegables">
                    <div className="cont-mas">
                        <button className="linksNav mas" onClick={handleClickLinks} style={buttonStyle}>Más<i><MdKeyboardArrowDown /></i></button>
                    </div>
                    <div className="linksOcultosOne" style={ocultarMenuLinks}>
                        <button className="linksOc Mostrar1">Eventos</button>
                        <button className="linksOc Mostrar2">Programa</button>
                        <button className="linksOc Mostrar3">Valoraciones</button>
                        <button className="linksOc Mostrar4">Ejemplos de código</button>
                        <button className="linksOc Mostrar5">Q&A</button>
                        <button className="linksOc Mostrar6">Certificaciones</button>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            </div>
            <div className="nav-list op">
                <div className="search" style={searchStyle}>
                    <div className="iconSearch"><HiOutlineSearch /></div>
                    <input className="mi-input" type="text" placeholder="Búscar" onClick={handleClick} onBlur={handleBlur} />
                </div>
                <button className="linksNav document">Documentación</button>
                <button className={`linksNav sesion ${selectedButton === 0 ? "active" : ""}`} onClick={() => handleButtonClick(0)}>Iniciar sesión</button>
                <div className="hamburger-menu">
                <button className="menu" onClick={handleClickMenu}>
                    <span className="hamburguer" style={menuStyleOne}></span>
                    <span className="hamburguer" style={menuStyleTwo}></span>
                    <span className="hamburguer" style={menuStyleThree}></span>
                </button>
            </div>
            </div>
        </nav>
        <div className="container">
            <div className={`section-menu ${menuOpen ? "mostrar-menu" : "mostrar-menu"}`} style={ocultarMenu}>
                <nav className="menu-desplegate abrirMenu">
                    <div className="container-fluid">
                        <div className="cont-menu">
                            <button className="link home"><i className="home-i"><HiOutlineHome /></i>Learn</button>
                            <div className="separate">
                                <button className="link buscar"><i className="buscar-i"><HiOutlineSearch /></i></button>
                                <button className="menu" onClick={handleClickMenu}>
                                    <span className="hamburguer" style={menuStyleOne}></span>
                                    <span className="hamburguer" style={menuStyleTwo}></span>
                                    <span className="hamburguer" style={menuStyleThree}></span>
                                </button>
                            </div>
                        </div>
                        <button className="link">Documentación</button>
                        <button className="link">Cursos</button>
                        <button className="link">Certificaciones</button>
                        <button className="link">Q&A</button>
                        <button className="link">Ejemplos de código</button>
                        <button className="link">Valoraciones</button>
                        <button className="link">Programa</button>
                        <button className="link">Eventos</button>
                    </div>
                    <div className="bienvenida">
                        <p className="text-bienvenida">Te damos la bienvenida a Microsoft Learm</p>
                        <button className="iniciar">Iniciar sesión</button>
                    </div>
                </nav>
            </div>
        </div></>
            <><div className="portada">
                <div className="container-fluid d-flex">
                    <div className={`section-inicio ${mostrarSection === 0 ? "mostrarInicio" : "noMostrarInicio"}`} onClick={() => mostrar(0)}>
                        <Inicio />
                    </div>
                </div>
                <div>
                    <div className="cont-info">
                        <Informacion />
                    </div>
                    <div className="cont-levels">
                        <Levels />
                    </div>
                    <div className="cont-testimonios">
                        <Testimonios />
                    </div>
                    <div className="cont-recursos">
                        <Recursos />
                    </div>
                    <div className="cont-footer">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="aprendeHaciendo">
                <div className="container-fluid d-flex">
                    <div className={`section-inicio ${mostrarSection === 0 ? "mostrarInicio" : "noMostrarInicio"}`} onClick={() => mostrar(0)}>
                        <InicioCursos />
                    </div>
                </div>
                <div>
                    <div className="cont-rutas">
                        <Rutas />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="documentacion">
                <div className="container-fluid d-flex">
                    <div className="inicio-documentacion">
                        <InicioDocumentacion />
                    </div>
                </div>
                <div>
                    <div>
                        <Articulos />
                    </div>
                    <div className="cont-recursos">
                        <Recursos />
                    </div>
                    <div className="cont-footer">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="preguntas">
                <div className="container-fluid d-flex">
                    <div className="inicio-preguntas">
                        <InicioPreguntas />
                    </div>
                </div>
                <div>
                    <div className="cont-datos">
                        <Datos />
                    </div>
                    <div className="cont-footer">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="programa">
                <div className="container-fluid d-flex">
                    <div className="inicio-programa">
                        <InicioPrograma />
                    </div>
                </div>
                <div>
                    <div className="cont-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </></>
    );
}

export default Header;