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
    notify(type, message, size, clickToClose) {
        switch (type) {
            case "notifyError":
                util.notifyError(message, {
                    timeout: 5000,
                    size,
                    clickToClose
                });
                break;
            case "confirm":
                util.confirm(message, "Yes", "No", 5000);
                break;
            default:
                util.notify(message, {
                    timeout: 5000,
                    size,
                    clickToClose
                });
                break;
        }
    }
    render() {
        return (
            <GridCell className={styles.usersTable}>
                <GridCell>
                    <Button onClick={() => { util.startLoading(); } }>start</Button>
                    <Button onClick={()=> {util.stopLoading();}
                    }>stop</Button>
                    <Button onClick={()=> {util.stopLoading(true);}
                    }>stop error</Button>
                </GridCell>
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