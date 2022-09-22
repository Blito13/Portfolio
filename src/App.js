        import React from "react";
        import { Provider } from "react-redux";
      /*   import   {Home ,  Users , NavBar , Create , About}  from "../Components"; */
      import { Route, Routes ,Switch } from "react-router-dom";
      import "./style/style.css"
      import { Navigate } from 'react-router-dom';
        import Home from "./Components/Home/Home"
        import NavBar from "./Components/NavBar/NavBar"
        import Contact from "./Components/Contact/Contact"
        import Footer from "./Components/Footer/Footer.jsx"
        import generateStore from "./store/store";
        import About from "./Components/About/About";
        import Proyects from "./Components/Proyects/Proyects";
        function App (){
            const store =  generateStore();
            return ( 
                <Provider  store={store}>
                    {<NavBar lang = {'ES'} key = {0}></NavBar>}
        
                      {<Home lang={'ES'} key = {1} />} 
               
                       {<Contact  lang = {'ES'} key = {2}></Contact>}
                        
                        {<About lang = {'ES'} ket = {3}></About>}

                        {<Proyects lang = {'ES'} key= {4}></Proyects>}
                <Footer />
              
                
                </Provider>

                    
            

            )   }
            export default App;

