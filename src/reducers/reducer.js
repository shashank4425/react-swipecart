import { ActionType } from "../constant/actionType"

const initialState= {
    status:false
}
export const isLoggedReducer= (state=initialState, {type,payload}) => {
 switch(type){
     case ActionType.isLogged: 
       return {...state, status: payload}
    default:
        return state   
 }
}