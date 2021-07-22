import { ActionType } from "../constant/ActionType"

const initialState= {
        isLogged:false
}
export const isLoggedReducer= (state=initialState, {type,payload}) => {
 switch(type){
     case ActionType.IS_LOGGED: 
       return {
         ...state, 
         isLogged: payload
        }
    default:
        return state   
 }
}