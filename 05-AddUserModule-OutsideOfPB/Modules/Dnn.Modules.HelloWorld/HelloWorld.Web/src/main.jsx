import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import Root from "./containers/Root";
import HelloWorldInit from "./globals/helloworld";

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    let containers = document.querySelectorAll('*[id^="helloworld-container"]');

    HelloWorldInit.init();
    
    containers.forEach((appContainer) => {

        let store = configureStore(); // Note: If you want two modules on the same page to be synced, move this line outside of the foreach.

        render(
            <Provider store={store}>
                <Root />
            </Provider>,
            appContainer
        );
    });
});