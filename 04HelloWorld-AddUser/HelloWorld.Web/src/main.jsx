﻿import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import Root from "./containers/Root";

let store = configureStore();

const appContainer = document.getElementById("helloworld-container");
render(
    <Provider store={store}>
        <Root />
    </Provider>,
    appContainer
);