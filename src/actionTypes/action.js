import { ActionType } from "../constant/ActionType";

export const isLoggedUser = (data) => {
    return {
        type: ActionType.IS_LOGGED,
        payload: data
    }
}