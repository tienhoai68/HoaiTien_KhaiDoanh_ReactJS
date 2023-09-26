import { ADD_USER } from "../types/userType"


export const addUserAction = (data) => {
    return {
        type: ADD_USER,
        payload: data,
    }
}