import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import SocialPanelHeader from "dnn-social-panel-header";
import PersonaBarPage from "dnn-persona-bar-page";
require('es6-object-assign').polyfill();
require('array.prototype.find').shim();
require('array.prototype.findindex').shim();

class App extends Component {
    constructor() {
        super();
    }
    
    render() {
        const {props} = this;
        return (
            <div className="helloworld-app">
                <PersonaBarPage isOpen="true">
                    <SocialPanelHeader title="Hello World">
                    </SocialPanelHeader>
                </PersonaBarPage>
            </div>
        );
    }
}




export default (App);