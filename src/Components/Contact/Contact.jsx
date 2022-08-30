import React, { useState , useRef} from "react";
/* import axios from "axios"; */
import Infobox from "../InfoBox/Infobox";
import style from "./Contact.module.css";
import emailjs from '@emailjs/browser'
const Key1 =  "service_opmxpez"
const Key2 =  "template_1ke7351"
const Key4 = process.env.REACT_APP_FOUR
console.log(Key1)
console.log(Key2)
console.log(Key4)

const Contact = ({ lang }) => {
  const form = useRef();
  const [contacto, setContacto] = useState("closed"); //visibility
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [confirm, setConfirm] = useState(null);

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
  //¿Cómo crear formulario de contáctenos con ReactJs y emailJS?
  
  const handleChange = (e) => {
    e.preventDefault();
    const keyState = e.target.name;
    const valueState = e.target.value;
    setMessage({ ...message, [keyState]: valueState });
   console.log(message)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    if (
      message.name.length < 1 ||
      message.name.length > 50 ||
      message.email.length < 1 ||
      message.email.length > 50 ||
      message.message.length < 1 ||
      message.message.length > 700 ||
      message.honeypot.length > 0
    ) {
      setConfirm("exceeded");
      return;
    }
    setConfirm("loading");
    setSending(true);
    emailjs.sendForm(Key1, Key2 ,form.current, Key4)
    .then((res)=> {

      console.log(res)
      setConfirm(true);
      setMessage({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    })
    .catch((err)=>{
      console.log(err)
    })
    setSending(false);
   
  };
  

  return (
    <section>
      <div
        className={`${style.contact} ${style[contacto]}`}
        onClick={handleClickOpen}
        rol="button"
        onFocus={handleClickOpen}
        tabIndex="-1"
      >
        <h2 className={style.h2Contact}>
          {lang === "ES" && "Contacto "}
          {lang === "EN" && "Contact  "}
          {contacto === "closed" && <i>↑</i>}
        </h2>
        {contacto === "open" && (
          <div className={style.containerContacto}>
            {lang === "ES" && (
              <Infobox
                subtitle={"Charlemos!"}
                text={
                  "Me encantaría hablar con vos.<br />Desde este formulario la página me envía un email directamente a mi correo.<br /> Podés ponerlo a prueba escribiéndome un mensaje breve para que te responda. "
                }
              />
            )}
            {lang === "EN" && (
              <Infobox
                subtitle={"Let's talk!"}
                text={
                  "I would love to talk with you.<br />Through this form you can email-me.<br />You can test it sending to me a little message "
                }
              />
            )}
            <form ref={form} className={`${style.form}`} onSubmit={handleSubmit}>
              <input
                type="text"
                maxLength="50"
                className={style.name}
                onChange={handleChange}
                name="name"
                value={message.name}
                placeholder={lang === "EN" ? "Your name" : "Tu nombre"}
                id="name"
                required
              />
              <input
                type="email"
                maxLength="50"
                className={style.name}
                name="email"
                onChange={handleChange}
                value={message.email}
                placeholder={lang === "EN" ? "Your email address" : "Tu email"}
                id="email"
                required
              />
              <textarea
                className={style.text}
                maxLength="700"
                name="message"
                onChange={handleChange}
                value={message.message}
                placeholder={lang === "EN" ? "Your message" : "Tu mensaje"}
                id="message"
                required
              />
              <div className={style.btnContainer}>
                {confirm === "loading" && (
                  <div className={style.confirm}>
                    {lang === "ES" ? "Sending..." : "Enviando..."}
                  </div>
                )}
                {confirm === true && (
                  <div className={style.confirm}>
                    {lang === "ES" ? "Thanks!" : "Gracias!"}
                  </div>
                )}
                {confirm === "exceeded" && (
                  <div className={style.confirm}>
                    {lang === "ES"
                      ? "Too many characters"
                      : "Demasiados carácteres"}
                  </div>
                )}
                {confirm === "false" && (
                  <div className={style.confirm}>"Server Error"</div>
                )}
                <button
                  type="submit"
                  className={style.submit}
                  onClick={handleSubmit}
                >
                  {lang === "EN" ? "Submit" : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {contacto === "open" && (
        <button
          className={style.btnClose}
          onClick={handleClickClose}
          value="coso"
        ></button>
      )}
    </section>
  );
};

export default Contact;

