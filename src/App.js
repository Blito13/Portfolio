        import React from "react";
        import { Route } from "react-router-dom";
      /*   import   {Home ,  Users , NavBar , Create , About}  from "../Components"; */
        import Home from "./Components/Home"
        import NavBar from "./Components/NavBar"
        import About from "./Components/About"
        import Create from "./Components/Create"
        import Users from "./Components/Users"
        import Details from "./Components/Details"
        
        function App (){
            return (
                <React.Fragment>
                    <NavBar/>
                    <Route path = {'/Home'} > 
                    <Home  name = {'Culino'} number={'7'}/></Route>
                    <Route path = {'/Create'} component = {Create}></Route>
                    <Route path = {'/About'} component = {About}></Route>
                    <Route path = {'/Users'} component = {Users}></Route>
                    <Route path = {'/Details/:id'} component =  {Details}></Route>

                    
                </React.Fragment>

            );
            }
            
            export default App;

