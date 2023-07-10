import React from "react";
import style from "./About.module.css";
import { useState } from "react";
import Infobox from "../InfoBox/Infobox";
import photogr from "../../media/Pablo.jpg";
const About =  ({lang}) => {
    const [confirm, setConfirm] = useState(null);
    const [contacto, setContacto] = useState("closed");
    const handleClickOpen = (e) => {
        e.preventDefault();
        setContacto(contacto === "closed" ? "open" : "open");
        document.documentElement.style.overflow = "hidden";
        document.getElementById("myH1").style.display = "none";
       
      };
    
      const handleClickClose = (e) => {
        e.preventDefault();
        setContacto(contacto === "open" ? "closed" : "closed");
        document.documentElement.style.overflow = "auto";
        document.getElementById("myH1").style.display = "";
        setConfirm(null);
      };
     
    return (
       <section >

        <div
          id="myH2"
          className={`${style.contact} ${style[contacto]}`}
          onClick={handleClickOpen}
          rol="button"
          onFocus={handleClickOpen}
          tabIndex="-1"
        >
          <h2 className={style.h2Contact}>
          {lang === "ES" && "Sobre mi"}
          {lang === "EN" && "Contact  "}
          {contacto === "closed" && <i>↑</i>}
       </h2>
       {contacto === "open" && (
          <div className={style.containerContacto}>
            {lang === "ES" && (
              <Infobox
              subtitle={"Sobre mi"}
              text= 
              {
                 "Hola! asigne esta seccion para darme a conocer un poco mas , y hacer mas facil <br/>cualquier busqueda que coincida o no con mi perfil , en primer lugar me considero una persona creativa , <br/>artista desde pequeño , amo la musica , el reciclaje y los juegos.<br/> Soy cerrajero ,vivo entre detalles e infimidades.<br/> Mi camino en la programacion comenzo con la idea de aprender a crear juegos web la cual sigue en proceso en la actualidad .<br/>Considero al front end como un profundo arte , como una disciplina y algo delo que me gustaria poder vivir.<br/>Siempre estoy buscando nuevos objetivos y desafios para catapultar mi carrera."
                }
                />
              )
              
              
              
              }


            
             
            </div>)}
                <div>
                    <h2>more
                    </h2>
                  {/* <img  src = {photogr} alt = {"i"}> </img> */}
    
                </div>
</div>
{contacto === "open" && (
        <button
          className={style.btnClose}
          onClick={handleClickClose}
          value="coso"
        ></button>
      )}
       </section>

    )
}
export default About;