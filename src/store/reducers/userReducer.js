import { SET_USER_INFO } from "../types/userType";

const DEDAULT_STATE = {
  userInfo: null,
};

export const userReducer = (state = DEDAULT_STATE, action) => {

  switch (action.payload) {
    case SET_USER_INFO: {
      state.userInfo = action.payload;
    }

      break;

    default:
      break;
  }

  return { ...state };
}
