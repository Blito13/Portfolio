import style from "./Carusel.module.css"
import qr from "../../media/Certificado.jpg"
import asss from "../../media/Integral.jpg"
import { useEffect } from "react"

const Carusel = () => {

    return(
   <div className={style.container}>
        <div className={style.carousel}>
        <p className={style.element}>"Incredible"</p>
        <p className={style.element}>"Perfect"</p>
        <p className={style.element}>"Awesome"</p>
        <p className={style.element}>"Punctual"</p>
        <p className = {style.element}>"Incredible"</p>
      </div>
   </div>
      
    )
}
export default Carusel;