import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./reducers";
import rootSaga from "./sagas/saga";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

// const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  const persistor = persistStore(store);
  return { persistor, store };
}
