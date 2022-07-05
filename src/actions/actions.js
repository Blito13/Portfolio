export function createUser(info){
  return{
    type: "CREATE_USER",
    payload : info
  }
}
export function deleteId(payload){
  console.log(payload)
  return {
    type : "DELETE_USER",
    payload
  }

}