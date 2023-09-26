import { ADD_USER } from "../types/userType"


const DEFAULT_STATE = {
    user: null,
}

export const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_USER:
            state.user = action.payload;
            break;
    }
    return { ...state }
}