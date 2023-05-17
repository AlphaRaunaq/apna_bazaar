import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk],
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
