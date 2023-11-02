import React from "react";
import RecursosCard from "../Portada/RecursosCards.js";
import "../../Css/SectionRecursos.css";

function Recursos() {
    return (
        <div className="cont-recursos-p">
            <div className="recursos">
                <h2 className="title-testimonios">Buscar <span className="text-resalt">Recursos</span> adicionales</h2>
                <div className="recursosCard">
                    <RecursosCard 
                        title="Empresas emergentes"
                        texto="Ponga en marcha sus negocios con Microsoft Cloud y haga crecer su startup, al tiempo que garantiza la seguridad y el cumplimiento..."
                    />
                    <RecursosCard 
                        title="Centro de estudiantes"
                        texto="Adquiera aptitudes técnicas para prepararse para el futuro. Busque cursos, eventos virtuales y oportunidades de estar en contacto..."
                    />
                    <RecursosCard 
                        title="Centro para formadores"
                        texto="Profundice en el aprendizaje con lecciones interactivas, obtenga horas de desarrollo profesional, adquiera certificaciones y busque programas..."
                    />
                    <RecursosCard 
                        title="Blog de Microsoft Learn"
                        texto="Obtenga las actualizaciones, artículos y noticias más recientes sobre contenido de aprendizaje y eventos de la comunidad de Microsoft Learn."
                    />
                    <RecursosCard 
                        title="Jornadas de aprendizaje virtual"
                        texto="Aproveche las jornadas de aprendizaje virtual gratuitas, donde los participantes con cualquier nivel de conocimientos pueden adquirir conocimientos técnicos en una variedad de..."
                    />
                    <RecursosCard 
                        title="Microsoft Reactor"
                        texto="Tanto si busca profesionalmente como si está creando la próxima gran idea, Microsoft Reactor lo pone en contacto con desarrolladores y startups que comparten sus objetivos."
                    />
                </div>
            </div>
        </div>
    );
}

export default Recursos;