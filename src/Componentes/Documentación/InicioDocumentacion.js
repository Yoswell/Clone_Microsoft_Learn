import React, { useState, useEffect } from "react";
import image from "../../Logo/documentacion.png";
import { HiOutlineSearch } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../Css/SectionDocumentacion.css";

function InicioDocumentacion() {
    const [documentacionClose, setDocumentacionClose] = useState(0);
    const [searchStyle, setSearchStyle] = useState({});

    const handleBlur = () => {
        setSearchStyle({});
    }

    const handleClick = () => { 
        setSearchStyle({ border: "1px double #75b6e7" });
    };
    
    const handleClickClose = () => {
        setDocumentacionClose(documentacionClose + 1);
    }

    useEffect(() => {
        switch(documentacionClose) {
            case 1 :
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.documentacion').style.display   = 'none';
                document.querySelector('.portada').style.display         = 'flex';
                setDocumentacionClose(0);
            break;
        }
    }, [documentacionClose]);
    

    return (
        <div className="inicio inicio-document">
            <div className="cont-inicio">
                <p className="seccion">Documentación
                    <button className="seccion-link" onClick={handleClickClose}>Inicio
                        <i><MdKeyboardArrowRight /></i>
                    </button>
                </p>
                <h1 className="title-inicio">Documentación técnica</h1>
                <p className="text-sm paddingB2">Busque artículos detallados sobre las tecnologías y las herramientas de desarrollo de Microsoft.</p>
                <div className="buscador">
                    <div className="search-inicio" style={searchStyle}>
                        <input 
                            className="mi-input input-inicio" 
                            type="text" 
                            placeholder="Buscar en la documentación" 
                            onClick={handleClick} 
                            onBlur={handleBlur}
                        />
                    </div>
                    <button className="btn btn-search"><i><HiOutlineSearch /></i>Buscar</button>
                </div>
            </div>
            <div className="cont-image">
                <img src={image} />
            </div>
        </div>
    );
}

export default InicioDocumentacion;  