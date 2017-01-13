import React, { Component, PropTypes } from "react";
import GridCell from "dnn-grid-cell";
import HeaderRow from "./HeaderRow";
import DetailRow from "./DetailRow";
import Button from "dnn-button";
import util from "utils";
import styles from "./UserTable.less";

class UserTable extends Component {
    getUserList() {
        return this.props.users && this.props.users.map(userDetail => {
            return <DetailRow userDetail={userDetail} />;
        });
    }
    render() {
        return (
            <GridCell className={styles.usersTable}>
                <HeaderRow />
                {this.getUserList()}
            </GridCell>
        );
    }
}

UserTable.propTypes = {
    users: PropTypes.array
};

export default UserTable;