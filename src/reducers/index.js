import clubName from "./clubName";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    changeClubName: clubName
})


export default allReducers;