import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import SocialPanelHeader from "dnn-social-panel-header";
import PersonaBarPage from "dnn-persona-bar-page";

class App extends Component {
    constructor() {
        super();
    }
    
    render() {
        const {props} = this;
        return (
            <div>
                <PersonaBarPage isOpen="true">
                    <SocialPanelHeader title="Hello World">
                    </SocialPanelHeader>
                </PersonaBarPage>
            </div>
        );
    }
}




export default (App);