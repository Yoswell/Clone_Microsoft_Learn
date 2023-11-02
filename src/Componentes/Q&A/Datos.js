import React, { useState, useEffect } from "react";
import D1 from "../../Logo/D1.png";
import D2 from "../../Logo/D2.png";
import D3 from "../../Logo/D3.png";
import P1 from "../../Logo/P1.svg";
import P2 from "../../Logo/P2.svg";
import P3 from "../../Logo/P3.png";

import P4 from "../../Logo/P4.svg";
import P5 from "../../Logo/P5.svg";
import P6 from "../../Logo/P6.svg";
import P7 from "../../Logo/P7.svg";
import P8 from "../../Logo/P8.svg";
import "../../Css/SectionPreguntas.css";
import Productos from "../../Componentes/Q&A/Productos.js";

function Datos() {
    return (
        <><div className="cardsDatos">
            <div className="cardDatos">
                <div className="cont-image-datos">
                    <img src={D1} />
                </div>
                <div className="cont-datos-card">
                    <div className="esp">
                        <p className="seccion seccion-datos">Visión general</p>
                        <a className="enlaces-datos">Comience con preguntas y respuestas</a>
                    </div>
                </div>
            </div>

            <div className="cardDatos">
                <div className="cont-image-datos">
                    <img src={D2} />
                </div>
                <div className="cont-datos-card">
                    <div className="esp">
                        <p className="seccion seccion-datos">Novedades</p>
                        <a className="enlaces-datos">Notas de la versión de preguntas y respuestas de Microsoft</a>
                    </div>
                </div>
            </div>

            <div className="cardDatos">
                <div className="cont-image-datos">
                    <img src={D3} />
                </div>
                <div className="cont-datos-card">
                    <div className="esp">
                        <p className="seccion seccion-datos">Guía práctica</p>
                        <a className="enlaces-datos">Pautas para escribir una pregunta de calidad</a>
                    </div>
                </div>
            </div>

            <div className="cardDatos">
                <div className="cont-image-datos">
                    <img src={D3} />
                </div>
                <div className="cont-datos-card">
                    <div className="esp">
                        <p className="seccion seccion-datos">Guía práctica</p>
                        <a className="enlaces-datos">Escribe una respuesta de calidad</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-productos-card">
            <h1 className="title-inicio">Productos Compatibles</h1>
            <div className="productos">
                <Productos 
                    image={P1}
                    enlace=".RED"
                    texto="Tecnologías Microsoft basadas en el framework de software .NET."
                />
                <Productos 
                    image={P2}
                    enlace="Celeste"
                    texto="Una plataforma e infraestructura de computación en la nube para crear, implementar y administrar aplicaciones y servicios a través de una red mundial de centros de datos administrados por Microsoft."
                />
                <Productos 
                    image={P3}
                    enlace="HoloLens"
                    texto="Una familia de dispositivos holográficos autónomos de Microsoft que permiten la interacción con el contenido digital y la interacción con hologramas en el entorno circundante."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft 365"
                    texto="Anteriormente Office 365, es una línea de servicios de suscripción ofrecidos por Microsoft que se suma e incluye la línea de productos de Microsoft Office."
                />
                <Productos 
                    image={P3}
                    enlace="Publicidad de Microsoft"
                    texto="Una unidad de negocio de Microsoft que establece la estrategia empresarial y de producto para los clientes anunciantes y editores en línea."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft Graph"
                    texto="Un modelo de programación de Microsoft que expone las API de REST y las bibliotecas de cliente para acceder a los datos de los servicios de Microsoft 365."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft Intune"
                    texto="Una solución de administración basada en la nube de Microsoft que ofrece administración de dispositivos móviles, administración de aplicaciones móviles y capacidades de administración de PC."
                />
                <Productos 
                    image={P3}
                    enlace="Centro de partners de Microsoft"
                    texto="A Microsoft website for partners that provides access to product support, a partner community, and other partner services."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft BizTalk Server"
                    texto="Una familia de productos de servidor de Microsoft que admiten la administración de implementación a gran escala de procesos de integración de aplicaciones empresariales."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft System Center"
                    texto="Un conjunto de productos de administración de sistemas de Microsoft que ofrecen soluciones para administrar recursos de centros de datos, nubes privadas y dispositivos cliente."
                />
                <Productos 
                    image={P4}
                    enlace="Microsoft Teams"
                    texto="Un área de trabajo personalizable basada en chat de Microsoft."
                />
                <Productos 
                    image={P3}
                    enlace="Microsoft Viva"
                    texto="Una plataforma de experiencia del empleado de Microsoft basada en Microsoft 365 que reúne comunicaciones, conocimientos, aprendizaje, recursos y perspectivas."
                />
                <Productos 
                    image={P5}
                    enlace="Office"
                    texto="Un conjunto de software de productividad de Microsoft que admite tareas empresariales comunes, como procesamiento de textos, correo electrónico, presentaciones y administración y análisis de datos."
                />
                <Productos 
                    image={P3}
                    enlace="SQL Server"
                    texto="Una familia de sistemas de análisis y administración de bases de datos relacionales de Microsoft para soluciones de comercio electrónico, línea de negocio y almacenamiento de datos.."
                />
                <Productos 
                    image={P6}
                    enlace="Sysinternals"
                    texto="Utilidades avanzadas del sistema para administrar, solucionar problemas y diagnosticar sistemas y aplicaciones Windows y Linux."
                />
                <Productos 
                    image={P7}
                    enlace="Visual Studio"
                    texto="Una familia de suites de Microsoft de herramientas de desarrollo integradas para crear aplicaciones para Windows, la web y dispositivos móviles."
                />
                <Productos 
                    image={P8}
                    enlace="Windows"
                    texto="Una familia de sistemas operativos de Microsoft que se ejecutan en computadoras personales, tabletas, computadoras portátiles, teléfonos, dispositivos de Internet de las cosas, auriculares de realidad mixta autónomos, pantallas de..."
                />
            </div>
        </div></>
    );
}

export default Datos;  