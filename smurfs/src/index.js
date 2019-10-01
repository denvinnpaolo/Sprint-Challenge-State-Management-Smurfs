import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//dependency imports
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


//reducer
// import rootReducer from "./reducer";
import fetchReducer from "./reducer/fetchReducer";

const store = createStore(fetchReducer, applyMiddleware(thunk,logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
