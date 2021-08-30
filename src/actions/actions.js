// export const GET_USERS_FETCH = 'GET_USERS_FETCH'
// export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

// export const getUsersFetch = () => ({
//     type: GET_USERS_FETCH
// })


import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  userRequest: null,
  userFetchingSuccess: ["payload"],
  userFetchingFailure: ["payload"],
});
export default Creators;
