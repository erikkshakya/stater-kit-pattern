// import { GET_USERS_SUCCESS } from "./actions";

// export const myreducer = (state = { users: [] }, action) => {
//   switch (action.type) {
//     case GET_USERS_SUCCESS:
//       return {
//         ...state,
//         users: action.users,
//       };
//     default:
//       return state;
//   }
// };

// export const initialState = {
//   laoding: false,
//   users: [],
//   error: "",
// };

// export const getUserRequest = (state) => ({ ...state, loading: true });

// export const getUserSuccess = (state, action) => {
//   return {
//     ...state,
//     loading: false,
//     users: action.payload,
//   };
// };

// export const getUserFail = (state, action) => ({
//   ...state,
//   loading: false,
//   error: action.error,
// });

// export const HANDLER = {
//   [Types.GET_USERS_REQUEST]: getUserRequest,
//   [Types.GET_USERS_SUCCESS]: getUserSuccess,
//   [Types.GET_USERS_FAIL]: getUserFail,
// };

// const userReducer = createReducer(initialState, HANDLER);

// export default userReducer;

import { createReducer } from "reduxsauce";

import { Types } from "../actions/actions";

import persist from "../utils/persist";

const INITIAL_STATE = {
  loading: true,
  users: [],
  error: "",
};

export const userRequest = (state) => {
  return {
    ...state,
    loading: false,
    users: [],
  };
};

export const userFetchingSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    users: action.payload.users,
  };
};

export const userFetchingFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_FETCHING_SUCCESS]: userFetchingSuccess,
  [Types.USER_FETCHING_FAILURE]: userFetchingFailure,
});

export default persist('loader', [], userReducer);

