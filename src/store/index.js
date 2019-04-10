import reducer from './rootReducer'
import * as sagas from './rootSaga';
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composed = reduxDevTools ? compose(applyMiddleware(sagaMiddleware), reduxDevTools) : compose(applyMiddleware(sagaMiddleware))

export const store = createStore(
  reducer,
  composed
);
sagas.registerWithMiddleware(sagaMiddleware);

// refer https://decembersoft.com/posts/4-tips-for-managing-many-sagas-in-a-react-redux-saga-app/
// for 'sagas.registerWithMiddleware' pattern
