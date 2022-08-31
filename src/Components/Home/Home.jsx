
import React, { useState, useEffect, Fragment } from "react";
import Loading from "../Loading/Loading.jsx";
//import axios from "axios";
import Infobox from "../InfoBox/Infobox.jsx";
import style from "./Home.module.css";
import qr from "../../media/qr-code.svg";
import EN from "./resume_EN.json";
import ES from "./resume_ES.json";
import Carusel from "../Carusel/Carusel.jsx";

//const URL = process.env.REACT_APP_URL || process.env.REACT_APP_VERCEL_URL;

const resume = { EN, ES };

const Home = ({ lang }) => {
  const [itsLoading, setItsLoading] = useState(false);
   //const [resume, setResume] = useState(null);

  /*   useEffect(() => {
    setItsLoading(true);
    axios
      .get(`${URL}/api/lang/?query=${lang}`)
      .then((res) => {
        console.log(res)
        setResume(res);
        setItsLoading(false);
      })
      .catch((err) => {
        console.log("Something was grong : ", err);
      });
  }, [lang]); */

  return (
    <section>
      {itsLoading && <Loading />}
      <article>
        <div className={style.containerResume}>
          <div className={style.column}>
            {resume &&
              resume[lang].data.map((e) => {
                if (e.side === "left") {
                  return (
                    <Infobox
                      key={e.id}
                      color={e.id}
                      subtitle={e.subtitle}
                      text={e.text}
                    />
                  );
                } else {
                  return false;
                }
              })}
          </div>
          <div className={style.column}>
                {resume &&
                  resume[lang].data.map((e) => {
                    if (e.side === "right") {
                      return (
                        <Infobox
                          key={e.id}
                          color={"Right"}
                          subtitle={e.subtitle}
                          text={e.text}
                        />
                      );
                    } else {
                      return false;
                    }
                  })}
            <div >
              <div>
              
                <Carusel></Carusel>
              
                
              </div>
            </div>
          
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
/* <h1>CSS-only Carousel</h1>

<p>This carousel is created with HTML and CSS only.</p>

<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section> 
css
*/
/*  */