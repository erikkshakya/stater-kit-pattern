// import { takeEvery, call, put } from "redux-saga/effects";
// import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
// import getUser from "./services/index";
// import userActions, {Types} from './actions'

// // function usersFetch() {
// //   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
// //     res.json()
// //   );
// // }

// // function* workGetUsersFetch() {
// //   const response = yield call(getUser);
// //   console.log("asasd", response);
// //   yield put({ type: GET_USERS_SUCCESS, users: response.data });
// // }

// // function* mysaga() {
// //   yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
// // }

import { call, put, takeLatest } from "redux-saga/effects";

import userActions, { Types } from "../actions/actions";
import { getUser } from "../services/index";

function* fetchUser(action) {
  const { data } = yield call(getUser);
  console.log("sasa", data);
  yield put(userActions.userFetchingSuccess({ users: data }));
}

function* rootSaga() {
  yield takeLatest(Types.USER_REQUEST, fetchUser);
}

export default rootSaga;
