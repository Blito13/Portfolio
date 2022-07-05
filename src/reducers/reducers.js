




let index = 1;
const initialState = {
    users : []
  }
  
  export default function rootReducer(state = initialState, { payload, type }) {
    switch(type){
      case 'CREATE_USER':
        return{
          ...state,
          // users: state.users.concat(action.payload)
          users : [...state.users , {...payload , id : index++}]
        }
      case "DELETE_USER":
        console.log(payload)
        return{
          ...state,
          users : state.users.filter((u)=> u.id !== payload)
        }
        default : return {...state}
    }
    
  };
  
