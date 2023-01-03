const addTreinersReducer = (state ='',action) =>{
    switch(action.type){
   case "ADDTREINERNAME":
       return  action.addTreinerName
    case 'ADDTREINERSURNAME':
        return action.addTreinerSurname
       default :
       return state 
    }

}

export default addTreinersReducer;