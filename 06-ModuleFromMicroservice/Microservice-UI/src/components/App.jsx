import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPage from "dnn-persona-bar-page";
import UserActions from "actions/UserActions";
import Table from "./Table";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import Tabs from "dnn-tabs";
import GridCell from "dnn-grid-cell";
import AddUser from "./AddUser";
import styles from "./App.less";

class App extends Component {
    componentWillMount() {
        this.props.dispatch(UserActions.getData());
    }
    render() {
        return (
            <GridCell className={styles.usersApp}>
                <GridCell className="users-body">
                    <Table list={this.props.list} />
                </GridCell>
            </GridCell>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    list: PropTypes.array
};

function mapStateToProps(state) {
    return {
        list: state.users.list
    };
}

export default connect(mapStateToProps)(App);