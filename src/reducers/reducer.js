import { ActionType } from "../constant/ActionType"

const initialState= {
        isLogged:false,
        loginInfo:null
}
export const isLoggedReducer= (state=initialState, {type,payload}) => {
 switch(type){
     case ActionType.IS_LOGGED: 
       return {
         ...state, 
         isLogged: payload.LogStatus,
         loginInfo: payload.LogInfo
        }
    default:
        return state   
 }
}