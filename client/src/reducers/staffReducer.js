import {
  GET_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  SET_LOADING,
  STAFF_ERROR,
} from "../actions/types";

const initialState = {
  staff: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload,
        loading: false,
      };
    case ADD_STAFF:
      return {
        ...state,
        staff: [...state.staff, action.payload],
        loading: false,
      };
    case DELETE_STAFF:
      return {
        ...state,
        staff: state.staff.filter((s) => s._id !== action.payload),
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
};
