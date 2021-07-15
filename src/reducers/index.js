import { combineReducers } from "redux"
import { isLoggedReducer } from "../reducers/reducer"
const allReducers = combineReducers({
    isLoggedUser : isLoggedReducer
})
export default allReducers;