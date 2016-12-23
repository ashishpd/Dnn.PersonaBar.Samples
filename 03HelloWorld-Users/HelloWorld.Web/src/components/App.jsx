import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPage from "dnn-persona-bar-page";
import UserActions from "actions/UserActions";
import UserTable from "./UserTable";

const searchParameters = {
    searchText: "",
    filter: 0,
    pageIndex: 0,
    pageSize: 10,
    sortColumn: "",
    sortAscending: false
};

class App extends Component {
    componentWillMount() {
        this.props.dispatch(UserActions.getUsers(searchParameters));
    }
    render() {
        return (
            <div>
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title="Users">
                    </PersonaBarPageHeader>
                    <UserTable users={this.props.users}/>
                </PersonaBarPage>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.array
};

function mapStateToProps(state) {
    return {
        users: state.users.list
    };
}

export default connect(mapStateToProps)(App);