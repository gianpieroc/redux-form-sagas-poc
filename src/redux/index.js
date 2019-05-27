import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    combineReducers({
      form
    }),
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
