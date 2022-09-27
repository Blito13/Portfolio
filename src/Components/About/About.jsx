import React from "react";
import style from "./About.module.css";
import { useState } from "react";
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
        document.getElementById("myH1").style.display = "flex";
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
          {lang === "ES" && "About me "}
          {lang === "EN" && "Contact  "}
          {contacto === "closed" && <i>↑</i>}
       </h2>

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