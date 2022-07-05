import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {" "}
       <br />
      <a
        target="_blank"
        rol="link"
        rel="noopener noreferrer"
        href="https://github.com/Em3c2/eme-resume"
        className={style.repo}
      >
        {/* {">"}{"<"} */}
      </a>{" "}
    </footer>
  );
};

export default Footer;















/* import React from "react";
import { createUser } from "../actions/actions";
import { useDispatch } from "react-redux";
export default function Create (){
    let [ input , setInput] = React.useState({
     name:'',
     unidad :'',
     decena : ''
    ,centena : ''})
    

    let handleChange = (e)=>{
       e.preventDefault();
       setInput((state) => ({...state , [e.target.name] : e.target.value }))
    }
        let dispatch = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(input))
        setInput({ 
        name:'',
        unidad :'',
        decena : '',
        centena : ''})

    }

    return (
        <React.Fragment>
            <div>Create player  </div>
            <br/>
            <form onSubmit ={e => handleSubmit(e)}>
                <div>
                    <label>Nombre</label>
                    <br/>
                    <input type = {'text'} name = {'name'} value = {input.name}
                    onChange = {(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Unidad</label>
                    <br/>
                    <input type = 'text' name = {'unidad'} value = {input.unidad} 
                    onChange = {(e)=>handleChange(e)} />
                </div>
                <div>
                    <label>Decena</label>
                    <br/>
                    <input type = 'text' name = {'decena'} value = { input.decena} 
                    onChange = {(e)=>handleChange(e)}/>
                 </div>
                <div>
                    <label>Centena</label>
                    <br/>
                    <input type = 'text' name ={'centena'} value = {input.centena} 
                    onChange = {(e)=>handleChange(e)}/>
                </div>
                <br/>
                <input type = {'submit'} value ={'CREAR'}/>
            </form>
        </React.Fragment>
    )
} */


