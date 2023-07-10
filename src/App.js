        import React from "react";
        import { Provider } from "react-redux";
      /*   import   {Home ,  Users , NavBar , Create , About}  from "../Components"; */
      import { Link, Route, Routes ,Switch } from "react-router-dom";
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
                    {<NavBar lang = {'ES'}></NavBar>}
        
                      {<Home lang={'ES'}  />} 
                      
                       {<Contact  lang = {'ES'} ></Contact>}
                        
                        {<About lang = {'ES'} ></About>}

                        {<Proyects lang = {'ES'} ></Proyects>}
                <Footer />
              
                
                </Provider>

                    
            

            )   }
            export default App;

