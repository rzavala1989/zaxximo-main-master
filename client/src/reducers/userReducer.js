import {
  SET_CURRENT_USER,
  USER_LOADING,
  GET_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  SET_LOADING,
  STAFF_ERROR,
} from "../actions/types";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  users: null,
  loading: false,
  error: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    //Logging in
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    //Managing staff
    case GET_STAFF:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ADD_STAFF:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    case DELETE_STAFF:
      return {
        ...state,
        user: state.user.filter((u) => u._id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STAFF_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
