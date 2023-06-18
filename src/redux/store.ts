import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../utils/rootReducer";

// import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from "../utils/rootSaga";
// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: false,
  //   }).concat(sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);

export default store;
