let index = 1;
const initialState = {
    users : []
  }
  
  const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case 'CREATE_USER':
        return{
          ...state,
          // users: state.users.concat(action.payload)
          users : [...state.users , {...action.payload , id : index++}]
        }
      case "DELETE_USER":
        return{
          ...state,
          users : state.users.filter((u)=> u.id !== action.payload)
        }
        default : return {...state}
    }
    
  };
  
  export default rootReducer;