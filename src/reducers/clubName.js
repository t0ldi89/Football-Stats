 const clubName = (state = 'gowno', action) =>{
     switch(action.type){
        case 'CHANGEnAME': 'dupsko'
        return 'dupa'
        default:
            return state;
     }

}

export default clubName;