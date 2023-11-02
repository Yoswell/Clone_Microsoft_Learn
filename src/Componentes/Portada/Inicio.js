import React, { useState } from "react";
import "../../Css/SectionInicio.css";
import image from "../../Logo/inicio.png";
import { HiOutlineSearch } from "react-icons/hi";

function Inicio() {
    const [searchStyle, setSearchStyle] = useState({});

    const handleBlur = () => {
        setSearchStyle({});
    }

    const handleClick = () => { 
        setSearchStyle({ border: "1px double #75b6e7" });
    };

    return (
        <div className="inicio">
            <div className="cont-inicio">
                <h1 className="title-inicio">Microsoft Learn. Posibilidad de Spark</h1>
                <p className="text-sm">Adquiera conocimientos que le abran las puertas. Vea todo lo que puede hacer con la documentación, los cursos prácticos y las certificaciones, que le ayudarán a sacar el máximo partido a los productos de Microsoft.</p>
                <div className="buscador">
                    <div className="search-inicio" style={searchStyle}>
                        <input 
                            className="mi-input input-inicio" 
                            type="text" 
                            placeholder="Buscar en microsoft learn" 
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

export default Inicio;