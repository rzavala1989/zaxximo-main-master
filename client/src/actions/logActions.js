import axios from "axios";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

// export const getLogs = () =>  (dispatch) => {

//     dispatch(setLoading());
//     axios
//     .get("/api/logs")
//     .then(res =>
//       dispatch({
//         type: GET_LOGS,
//         payload: res.data
//     })

//   ) catch (error) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: error.res.data,
//     });

// };
export const getLogs = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/api/logs")
    .then((res) =>
      dispatch({
        type: GET_LOGS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_LOGS,
        payload: err.response,
      })
    );
};
// export const getLogs = () => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch("/api/logs");
//     const data = await res.json();

//     dispatch({ type: GET_LOGS, payload: data.data });
//   } catch (err) {
//     dispatch({ type: LOGS_ERROR, payload: err });
//   }
// };

// export const addLog = (log) => (dispatch) => {
//   dispatch(setLoading());

//   axios
//     .post("/api/logs", log)
//     .then((res) =>
//       dispatch({
//         type: ADD_LOG,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: LOGS_ERROR,
//         payload: err.response.statusText,
//       })
//     );
// };

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    log.date = new Date();
    const res = await fetch("/api/logs", {
      method: "post",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    dispatch({ type: ADD_LOG, payload: data.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/logs/${id}`, { method: "delete" });

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

// keep current log in order to edit
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const { message, attention, user, id } = log;
    log.date = new Date();
    const res = await fetch(`/api/logs/${id}`, {
      method: "put",
      body: JSON.stringify({ message, attention, user }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    dispatch({ type: UPDATE_LOG, payload: data.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
