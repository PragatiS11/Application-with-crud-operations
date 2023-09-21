import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
  isAuth: localStorage.getItem("isAuth") || false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true , isError: false };
    case LOGIN_SUCCESS:
      console.log("login success" ,payload)
      localStorage.setItem("isAuth" , true)
      return { ...state, isLoading: false, isAuth: true, token: payload , isError: false};
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGOUT:
      localStorage.setItem("isAuth" , false)
      return { ...state, isLoading: false, isAuth: false, token: "" , isError: false}
    default:
      return state;
  }
};
