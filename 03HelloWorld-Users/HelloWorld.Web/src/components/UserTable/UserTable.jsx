import React, { Component, PropTypes } from "react";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import HeaderRow from "./HeaderRow";
import DetailRow from "./DetailRow";
import styles from "./UserTable.less";

class UserTable extends Component {
    getUserList() {
        return this.props.users && this.props.users.map(userDetail => {
            return <DetailRow userDetail={userDetail}/>;
        });
    }
    render() {
        return (
            <PersonaBarPageBody className={styles.usersTable}>
                <HeaderRow />
                {this.getUserList()}
            </PersonaBarPageBody>
        );
    }
}

UserTable.propTypes = {
    users: PropTypes.array
};

export default UserTable;