import { ActionType } from "../constant/ActionType";

export const isLoggedUser = (isLogged) => {
    return {
        type: ActionType.IS_LOGGED,
        payload: isLogged 
    }
}