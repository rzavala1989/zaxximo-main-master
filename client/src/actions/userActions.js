import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  SET_LOADING,
  STAFF_ERROR,
} from "./types";
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const getStaff = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/api/users")
    .then((res) =>
      dispatch({
        type: GET_STAFF,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};
export const addStaff = (userData) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((s) =>
      dispatch({
        type: ADD_STAFF,
        payload: s.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
};
// export const addStaff = (s) => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch("/api/users/register", {
//       method: "POST",
//       body: JSON.stringify(s),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();

//     dispatch({
//       type: ADD_STAFF,
//       payload: data.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: STAFF_ERROR,
//       payload: err,
//     });
//   }
// };

export const deleteStaff = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_STAFF,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
