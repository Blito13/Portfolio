export function createUser(info){
  return{
    type: "CREATE_USER",
    payload : info
  }
}
export function deleteId(id){
  return {
    type : "DELETE_USER",
    payload : id
  }

}