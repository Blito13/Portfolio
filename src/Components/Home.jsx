import React from "react";

function Home ({name , number}){
    let [input ,setInput] = React.useState({namme :'' , number :''})
    return(
        <div>
            <h1>{name}{number}</h1>


        </div>
    )
}
export default Home;