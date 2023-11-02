import React from "react";
import "../../Css/Testimonios.css";
import TestimoniosCard from "./TestimoniosCards.js";
import Ricardo from "../../Logo/Ricardo.jpg";
import Jacqueline from "../../Logo/Jacqueline.jpg";
import Charles from "../../Logo/Charles.jpg";

function Testimonios() {
    return (
        <div className="cont-testimonios">
            <div className="testimonios">
                <h2 className="title-testimonios">Conozca a <span className="text-resalt">alumnos inspiradores</span> de la comunidad</h2>
                <div className="testimonial">
                    <TestimoniosCard 
                        image={Ricardo}
                        nombre="Ricardo Lessa"
                        cargo="Ingeniero de preventa"
                        texto={`"Volví a creer en la posibilidad de empezar de nuevo, ponerme al día y volver al mercado de TI."`}
                        boton="Leer la historia de Ricardo"
                    />
                    <TestimoniosCard 
                        image={Jacqueline}
                        nombre="Jacqueline Ye"
                        cargo="Directora de productos"
                        texto={`"Quiero que otros sepan que, con esfuerzo, dedicación y una mentalidad de aprendizaje constante, se puede tener una carrera profesional muy gratificante."`}
                        boton="Leer la historia de Jacqueline"
                    />
                    <TestimoniosCard 
                        image={Charles}
                        nombre="Charles-Henri Sauget"
                        cargo="Director técnico y de plataformas de datos"
                        texto={`"Las certificaciones me han ayudado realmente a conseguir la confianza de mis clientes como asesor."`}
                        boton="Leer la historia de Charles-Henri"
                    />
                </div>
            </div>
        </div>
    );
}

export default Testimonios;