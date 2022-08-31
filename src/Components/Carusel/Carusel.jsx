import style from "./Carusel.css"
import qr from "../../media/Certificado.jpg"
import asss from "../../media/Integral.jpg"
import { useEffect } from "react"

const Carusel = () => {

    return(
<div className={style.body}>
<section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
        tabIndex="0"
        className="carousel__slide">
      <img
          className="carousel__snapper"
          
          src = {qr}
          alt = "aversi">
          </img>
        <a href="#carousel__slide2"
           className="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide2"
        tabIndex="0"
        className="carousel__slide">
      
          <img
          className="carousel__snapper"
          
          src = {asss}
          alt = "aversi">
          </img>
      <a href="#carousel__slide1"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         className="carousel__next">Go to next slide</a>
    </li>
    {/* <li id="carousel__slide3"
        tabIndex="0"
        className="carousel__slide">
      
      <img
          className="carousel__snapper"
          
          src = {asss}
          alt = "aversi">
          </img>
      <a href="#carousel__slide2"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         className="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabIndex="0"
        className="carousel__slide">
      
      <img
          className="carousel__snapper"
          
          src = {asss}
          alt = "aversi">
          </img>
      <a href="#carousel__slide3"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         className="carousel__next">Go to first slide</a>
    </li> */}
  </ol>
  <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1"
           className="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide2"
           className="carousel__navigation-button">Go to slide 2</a>
      </li>
      {/* <li className="carousel__navigation-item">
        <a href="#carousel__slide3"
           className="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li className="carousel__navigation-item">
        <a href="#carousel__slide4"
           className="carousel__navigation-button">Go to slide 4</a>
      </li> */}
    </ol>
  </aside>
</section> 
</div>
    )
}
export default Carusel;