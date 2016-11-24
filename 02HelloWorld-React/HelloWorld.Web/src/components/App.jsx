import React, {Component} from "react";
import SocialPanelHeader from "dnn-social-panel-header";
import PersonaBarPage from "dnn-persona-bar-page";

class App extends Component {
    render() {
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

export default App;