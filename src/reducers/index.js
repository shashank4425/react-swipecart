import { combineReducers } from "redux"
import { isLoggedReducer } from "../reducers/reducer"
const allReducers = combineReducers({
    isLogged : isLoggedReducer
})
export default allReducers;