 const clubNameReducer = (state = '', action) =>{
     switch(action.type){
    case "CLUBNAME":
        return  action.data ;
        default :
        return state
     }

}

export default clubNameReducer;