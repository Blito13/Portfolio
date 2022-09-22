import React from "react";
import {Interweave}  from "interweave";
import style from "./infobox.module.css";
import Carusel from "../Carusel/Carusel";
function Infobox({ color, subtitle, text }) {
  /* console.log(content) */
  return (
    <section className={style.container}>
      <div>
      <div className={`${style.divisionBar} bgColorDiv `}></div>
        <h2 className={style.subtitle}>{subtitle}</h2>
        <div className={style.content}>
          <div className={style.text}>
            <Interweave content={text} />
          </div>
        </div>
        <div>
        
        </div>
        
      </div>
            {/* <Carusel></Carusel> */}
    </section>
  );
}

export default Infobox;