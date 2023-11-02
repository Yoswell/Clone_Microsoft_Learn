import React, { useState, useEffect } from "react";
import "../../Css/SectionPrograma.css";
import image from "../../Logo/programa.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Destacados from "../Programa/Destacados.js";
import DES1 from "../../Logo/DES1.png";
import DES2 from "../../Logo/DES2.png";
import DES3 from "../../Logo/DES3.png";
import DES4 from "../../Logo/DES4.png";
import DES5 from "../../Logo/DES5.jpg";
import DES6 from "../../Logo/DES6.png";
import DES7 from "../../Logo/DES7.png";
import DES8 from "../../Logo/DES8.png";
import DES9 from "../../Logo/DES9.png";
import DES10 from "../../Logo/DES10.png";

function InicioPrograma() {
    const [programaClose, setProgramaClose] = useState(0);
    
    const handleClick = () => {
        setProgramaClose(programaClose + 1);
    }

    useEffect(() => {
        switch(programaClose) {
            case 1 :
                document.querySelector('.programa').style.display        = 'none';
                document.querySelector('.aprendeHaciendo').style.display = 'none';
                document.querySelector('.documentacion').style.display   = 'none';
                document.querySelector('.preguntas').style.display       = 'none';
                document.querySelector('.portada').style.display         = 'flex';
                setProgramaClose(0);
            break;
        }
    }, [programaClose]);

    return (
        <><><div className="inicio inicio-programs">
            <div className="cont-inicio">
                <div className="esp">
                    <p className="seccion">Programa 
                        <button className="seccion-link" onClick={handleClick}>Inicio
                            <i><MdKeyboardArrowRight /></i>
                        </button>
                    </p>
                </div>
                <h1 className="title-inicio">Programas</h1>
                <p className="text-sm paddingB2">Descubra miles de horas de programación original divertida, auténtica e informativa de expertos técnicos de Microsoft.</p>
                <div className="buscador">
                    <button className="examinar">Examinar todos los programas</button>
                </div>
            </div>
            <div className="cont-image">
                <img src={image} />
            </div>
        </div>
        <div className="cont-destacados">
            <h1 className="title-inicio">Destacados</h1>
            <div className="cont-card-destacados">
                <Destacados 
                    image={DES1}
                    enlace="PWA para principiantes"
                    texto="Te damos la bienvenida a PWA para principiantes. Únase a Beth Pan y a su equipo en este tutorial de 4 capítulos, 17-video que le guía por la creación de su propia aplicación web progresiva que puede ejecutar plataformas cruzadas y combinar lo mejor de las características web y nativas."
                />
                <Destacados 
                    image={DES2}
                    enlace="El laboratorio de DevOps"
                    texto="El laboratorio de DevOps se ha reimaginado para el año 2022. April Edwards seguirá trayendo lo más reciente y lo mejor de DevOps e interactuará con los espectadores y la comunidad en el programa. April siempre agradece sus comentarios. Dejaremos a un lado la palabrería y no solo le mostraremos cómo resolver sus problemas de DevOps mediante una amplia gama de herramientas y técnicas, sino también cómo empezar a usar estas herramientas y técnicas en el mundo real. A partir del 31 de agosto de 2021, conéctese los martes a las 7:00 (hora del Pacífico) para ver un nuevo episodio."
                />
            </div>
        </div>
        <div className="cont-destacados">
            <h1 className="title-inicio">Popular</h1>
            <div className="cont-card-popular">
                <Destacados 
                    image={DES3}
                    enlace="Zona de preparación del examen"
                    texto="Escuche a los expertos que proporcionarán consejos, trucos y estrategias para preparar un examen de certificación de Microsoft. Nuestros vídeos de preparación de exámenes le ayudarán a identificar los conocimientos y aptitudes clave que se evalúan en el examen y cómo organizar el tiempo de estudio. Cada segmento de vídeo se corresponde con un área de tema principal del examen. Nuestro instructor señalará los objetivos que muchos examinados encuentran difíciles."
                />
                <Destacados 
                    image={DES4}
                    enlace="Learn Live"
                    texto="Está justo ahí en el nombre: presentamos contenido de Microsoft Learn en directo. En cada episodio elegiremos un módulo de Learn y trabajaremos en él. Traeremos invitados para ofrecer comentarios adicionales de expertos y, a veces, incluso de los ingenieros que lo crearon. Únase a nosotros y plantee sus preguntas, ¡en directo!"
                />
                <Destacados 
                    image={DES5}
                    enlace="Preguntas a expertos"
                    texto="Estas transmisiones en directo de treinta minutos son donde puede conectarse con expertos para responder a sus preguntas."
                />
                <Destacados 
                    image={DES6}
                    enlace="Historia de los desarrolladores"
                    texto="Descubra cómo los desarrolladores de aplicaciones de todo el mundo confían en Azure para ayudarles a resolver importantes retos."
                />
            </div>
        </div>
        <div className="cont-destacados">
            <h1 className="title-inicio">Serie para principiantes</h1>
            <div className="cont-card-popular">
                <Destacados 
                    image={DES7}
                    enlace="Bash para principiantes"
                    texto="Bash se considera un lenguaje universal en lo que respecta a la informática en la nube y la programación. Muchos lenguajes admiten comandos de Bash para el paso de datos e información y, en lo que respecta a la nube, todas las plataformas admiten su uso para interactuar con su entorno. Aunque en el curso no hablaremos de todo lo que hay que saber sobre este lenguaje, queremos proporcionarle información básica sobre scripting en Bash. Al final del curso, podrá crear sus propios scripts y automatizar tareas con la ayuda de Bash."
                />
                <Destacados 
                    image={DES8}
                    enlace="Edición especial: solución de problemas de rendimiento | Azure SQL para principiantes"
                    texto="Únase a nosotros en una edición especial de Azure SQL para principiantes centrada en la solución de problemas de rendimiento. En esta serie, aprenderá una metodología probada basada en experiencias de cliente para solucionar problemas de rendimiento de Azure SQL Database. Le mostraremos las herramientas y técnicas para restringir varios problemas en un enfoque basado en escenarios."
                />
                <Destacados 
                    image={DES9}
                    enlace="Patrones de aplicaciones empresariales: patrón fiable de aplicaciones web: .NET"
                    texto="Los patrones de aplicaciones empresariales, basados en el marco de buena arquitectura de Azure, constan de implementaciones de referencia e instrucciones de arquitectura que permiten a los desarrolladores empresariales y arquitectos de soluciones modernizar sus mayores cargas de trabajo críticas en Azure de una forma confiable, segura, de alto rendimiento y rentable con procedimientos de diseño, desarrollo y operaciones modernos. El patrón fiable de aplicaciones web para .NET (versión preliminar pública) representa la primera de tres fases de aplicaciones web modernas y escalables en Azure."
                />
                <Destacados 
                    image={DES10}
                    enlace="Programación de bases de datos con T-SQL para principiantes"
                    texto="En esta serie de vídeos, aprenderá los conceptos básicos de Transact-SQL. Verá cómo agregar, editar, eliminar y consultar datos en una base de datos relacional. Seguirá junto con Marisa Mathews y Buck Woody a medida que crean una base de datos para una aplicación real de principio a fin de usar SQL Server. Después de completar la serie de vídeos y los módulos de Microsoft Learn complementarios, tendrá los conocimientos básicos para trabajar con Transact-SQL en sus propias aplicaciones."
                />
            </div>
        </div>
        <div className="cont-destacados follow-web">
            <h1 className="title-inicio">Siganos en la Web</h1>
        </div></></>
    );
}

export default InicioPrograma;