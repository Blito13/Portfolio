import React from "react";
import styles from "./Proyects.module.css"
import { useState } from "react";

const Proyects = ({lang}) => {
    const [confirm, setConfirm] = useState(null);
    const [contacto, setContacto] = useState("closed");
    const handleClickOpen = (e) => {
        e.preventDefault();
        setContacto(contacto === "closed" ? "open" : "open");
        document.documentElement.style.overflow = "hidden";
      };
    
      const handleClickClose = (e) => {
        e.preventDefault();
        setContacto(contacto === "open" ? "closed" : "closed");
        document.documentElement.style.overflow = "auto";
        setConfirm(null);
      };
    return (
        <section >

        <div
         id="myH1"
          className={`${styles.contact} ${styles[contacto]}`}
          onClick={handleClickOpen}
          rol="button"
          onFocus={handleClickOpen}
          tabIndex="-1"
        >
          <h2 className={styles.h2Contact}>
          {lang === "ES" && "Proyects videos"}
          {lang === "EN" && "Contact  "}
          {contacto === "closed" && <i>↑</i>}
       </h2>

</div>
{contacto === "open" && (
        <button
          className={styles.btnClose}
          onClick={handleClickClose}
          value="coso"
        ></button>
      )}
       </section>
    )
}
export default Proyects