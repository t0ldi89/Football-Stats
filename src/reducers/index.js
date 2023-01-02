import clubNameReducer from './clubName';
import addTreinersReducer from './addTreinerReducer';
import { combineReducers } from "redux";
 
const allReducers = combineReducers({
    changeClubName: clubNameReducer,
    addTreiner: addTreinersReducer
})


export default allReducers;