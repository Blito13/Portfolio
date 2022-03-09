import react from "react"
import { Link } from "react-router-dom"

export default function User({ id ,name , unidad , decena , centena}){
    return(
        <div> 
           <div>User number:{id}</div> 
        
            Name : <Link to = {`/Details/${id}`}>{name}</Link>
            <div>Unidad: {unidad}</div>
            <div>Decena: {decena}</div>
            <div>Centena: {centena}</div>
        
        </div>
    )
}