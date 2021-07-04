import { ActionType } from "./constant/actionType.js"

export const isLogged = (isLogged) =>{
   return {
    type : ActionType.isLogged,
    payload: isLogged
   }
}