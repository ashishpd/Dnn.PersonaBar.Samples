import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPage from "dnn-persona-bar-page";
import UserActions from "actions/UserActions";
import UserTable from "./UserTable";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import Tabs from "dnn-tabs";
import GridCell from "dnn-grid-cell";
import AddUser from "./AddUser";
import styles from "./App.less";

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
    onSelectTab(index){
        this.props.dispatch(UserActions.switchTab(index));
    }
    render() {
        return (
            <GridCell className={styles.usersApp}>
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title="Users">
                    </PersonaBarPageHeader>
                    <PersonaBarPageBody className="users-body">
                        <Tabs 
                        onSelect={this.onSelectTab.bind(this)}
                        selectedIndex={this.props.selectedTab}
                        tabHeaders={["Users", "Add User"]}>
                            <UserTable users={this.props.users} />
                            <AddUser />
                        </Tabs>
                    </PersonaBarPageBody>
                </PersonaBarPage>
            </GridCell>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.array,
    selectedTab: PropTypes.number
};

function mapStateToProps(state) {
    return {
        users: state.users.list,
        selectedTab: state.users.selectedTab
    };
}

export default connect(mapStateToProps)(App);