import React from "react";
import { useState } from "react";
import "../../Css/Footer.css";

import { GiEarthAmerica } from "react-icons/gi";
import { HiOutlineSun } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdWebStories } from "react-icons/md";

function Footer() {
    const [selectedButtonTheme, setSelectedButtonTheme] = useState(0);
    const [mostrarTemas, setMostrarTemas] = useState(false);

    const handleClick = (index) => { setSelectedButtonTheme(index); };
    const mostrarhandleClick = () => { setMostrarTemas(!mostrarTemas); };

    let ocultar = {};
    if (mostrarTemas === true) {
        ocultar = { display: "flex"}
    }
    else if (mostrarTemas === false) {
        ocultar = { display: "none"}
    }

    return (
        <div className="footer">
            <div className="footer-buttons d-flex">
                <button className="btn-footer"><i><GiEarthAmerica /></i>Español (España)</button>
                <button className="btn-footer" onClick={mostrarhandleClick}><i><HiOutlineSun /></i>Tema<i><MdKeyboardArrowDown /></i></button>
                <div className="theme" style={ocultar}>
                    <button className={`button-theme ${selectedButtonTheme === 1 ? "active-theme" : ""}`} onClick={() => handleClick(1)}><i className="ligth"><MdWebStories /></i>Claro</button>
                    <button className={`button-theme ${selectedButtonTheme === 0 ? "active-theme" : ""}`} onClick={() => handleClick(0)}><i className="dark"><MdWebStories /></i>Oscuro</button>
                </div>
            </div>
            <div className="list-footer">
                <a className="footer-link">Veriones anteriores</a>
                <a className="footer-link">Blog</a>
                <a className="footer-link">Contribuir</a>
                <a className="footer-link">Privacidad</a>
                <a className="footer-link">Términos de uso</a>
                <a className="footer-link">Marcas comerciales</a>
            </div>
        </div>
    );
}

export default Footer;