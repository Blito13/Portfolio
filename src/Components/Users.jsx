import React from "react";
import {connect} from "react-redux"
import User from './User'
import  {deleteId}  from "../actions/actions";

export  function Users({users}){
    ;

    let handleClick = (e) =>{
        e.preventDefault();
        deleteId()
    }
    return (
        <div>

            {
                users && users.map (u => <div> 
                    <User key = {u.id} 
                          id = {u.id}
                          name = {u.name} 
                          unidad = {u.unidad}
                          decena = {u.decena}
                          centena = {u.centena}/>
                          <button onClick = { (e)=> handleClick(e, u.id)}>Eliminar</button>
                          <br></br>
                          </div>)
                          
            }
        </div>
    )

}
function mapStateToProps(state){
    return{
        users : state.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        deleteId : (id) => dispatch(deleteId(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Users)