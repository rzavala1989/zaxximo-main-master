import {
  GET_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  SET_LOADING,
  STAFF_ERROR,
} from "./types";

export const getStaff = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/staff");
    const data = await res.json();

    dispatch({
      type: GET_STAFF,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err,
    });
  }
};

export const addStaff = (s) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/api/staff", {
      method: "POST",
      body: JSON.stringify(s),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_STAFF,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err,
    });
  }
};

export const deleteStaff = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/staff/${id}`, {
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
