import {messages} from '../../app/utilities/messages';
import { baseApi } from '../../constants/Presets.js'
import { types } from './actions'
import axios from "axios";
import qs from 'qs'
import { call, put, takeLatest } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(types.REQUEST_LOGIN, workerSaga);
}

// function that makes the api request and returns a Promise for response
function RequestLogin(payload) {
  // now calling the mock api. replace your login apis here.
  // inorder set the baseApi to your backend api, change in .env and Presets.js
  console.log('requesting api...', baseApi)
  return axios.get(baseApi , qs.stringify(payload))
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(RequestLogin, action.payload);

    const loggedInData = response || null;
    if(loggedInData) {
      let session_id = loggedInData.userId

      document.cookie = "session_id=" + session_id;
      // dispatch a success action to the store with logged in response
      yield put({ type: types.LOGIN_SUCCESS, payload: loggedInData });
    }else {
      yield put({ type: types.LOGIN_ERROR, payload: {message: messages.error_summury_2} });
    }


  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.LOGIN_ERROR, payload: error });
  }
}
