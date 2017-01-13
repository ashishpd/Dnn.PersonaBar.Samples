import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import GridCell from "dnn-grid-cell";
import GridSystem from "dnn-grid-system";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import UserActions from "actions/UserActions";
import Switch from "dnn-switch";
import Button from "dnn-button";
import Localization from "localization";
import util from "utils";
import styles from "./AddUser.less";

const inputStyle = {
    marginTop: 32,
    width: "100%"
};

function validateEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

function getFieldError(newUserRegistrationDetails, key) {
    let value = newUserRegistrationDetails[key] && newUserRegistrationDetails[key].value;
    switch (key) {
        case "email":
            return !validateEmail(value);
        case "userName":
        case "firstName":
        case "lastName":
            return !value;
        case "password":
            return value.length < 7 && !newUserRegistrationDetails.randomPassword.value;
        case "confirmPassword":
            return (value.length < 7 || newUserRegistrationDetails.confirmPassword.value !== newUserRegistrationDetails.password.value) && !newUserRegistrationDetails.randomPassword.value;
        default:
            return false;
    }
}

function valueMap(obj) {
    let returnObject = {};

    Object.keys(obj).forEach(key => {
        returnObject[key] = obj[key].value;
    });

    return returnObject;
}

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            triedToSave: false
        };
    }

    onChange(key, event) {
        let value = typeof event === "object" ? event.target.value : event;
        let newUserRegistrationDetails = util.getObjectCopy(this.props.newUserRegistrationDetails);

        newUserRegistrationDetails[key].value = value;

        newUserRegistrationDetails[key].error = getFieldError(newUserRegistrationDetails, key);

        this.props.dispatch(UserActions.updateNewUserDetails(newUserRegistrationDetails));
    }

    onAddUser() {
        this.setState({
            triedToSave: true
        });

        let newUserRegistrationDetails = util.getObjectCopy(this.props.newUserRegistrationDetails);
        let errorCount = 0;

        Object.keys(newUserRegistrationDetails).forEach(key => {
            newUserRegistrationDetails[key].error = getFieldError(newUserRegistrationDetails, key);
            if (newUserRegistrationDetails[key].error) {
                errorCount++;
            }
        });

        this.props.dispatch(UserActions.updateNewUserDetails(newUserRegistrationDetails));

        if (errorCount > 0) {
            return;
        }

        this.props.dispatch(UserActions.createUser(valueMap(newUserRegistrationDetails), () => {
            this.props.dispatch(UserActions.clearNewUser());
            this.props.dispatch(UserActions.switchTab(0));
        }));
    }

    onCancel() {
        util.confirm(Localization.get("UnsavedChanges.Warning"), Localization.get("Yes.Button"), Localization.get("No.Button"), () => {
            this.props.dispatch(UserActions.clearNewUser());
        });
    }

    render() {
        const {newUserRegistrationDetails} = this.props, { triedToSave } = this.state, randomPassword = newUserRegistrationDetails && newUserRegistrationDetails.randomPassword.value;
        return (
            <GridCell className={styles.addUser}>
                <GridSystem>
                    <GridCell>
                        <SingleLineInputWithError
                            label={Localization.get("FirstName.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.firstName.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.firstName.error}
                            onChange={this.onChange.bind(this, "firstName")}
                            tabIndex={1}
                            />
                        <SingleLineInputWithError
                            label={Localization.get("UserName.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.userName.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.userName.error}
                            onChange={this.onChange.bind(this, "userName")}
                            tabIndex={3}
                            />
                        <Switch
                            label={Localization.get("Authorized.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.authorize.value}
                            onChange={this.onChange.bind(this, "authorize")}
                            />
                        {!randomPassword && <SingleLineInputWithError
                            label={Localization.get("Password.Label")}
                            style={inputStyle}
                            type="password"
                            value={newUserRegistrationDetails && newUserRegistrationDetails.password.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.password.error}
                            onChange={this.onChange.bind(this, "password")}
                            tabIndex={5}
                            />
                        }
                    </GridCell>
                    <GridCell>
                        <SingleLineInputWithError
                            label={Localization.get("LastName.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.lastName.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.lastName.error}
                            onChange={this.onChange.bind(this, "lastName")}
                            tabIndex={2}
                            />
                        <SingleLineInputWithError
                            label={Localization.get("EmailAddress.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.email.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.email.error}
                            onChange={this.onChange.bind(this, "email")}
                            tabIndex={4}
                            />
                        <Switch
                            label={Localization.get("RandomPassword.Label")}
                            style={inputStyle}
                            value={newUserRegistrationDetails && newUserRegistrationDetails.randomPassword.value}
                            onChange={this.onChange.bind(this, "randomPassword")}
                            />
                        {!randomPassword && <SingleLineInputWithError
                            label={Localization.get("ConfirmPassword.Label")}
                            style={inputStyle}
                            type="password"
                            value={newUserRegistrationDetails && newUserRegistrationDetails.confirmPassword.value}
                            error={newUserRegistrationDetails && triedToSave && newUserRegistrationDetails.confirmPassword.error}
                            onChange={this.onChange.bind(this, "confirmPassword")}
                            tabIndex={6}
                            />
                        }
                    </GridCell>
                </GridSystem>
                <GridCell className="add-user-footer">
                    <Button type="secondary" onClick={this.onCancel.bind(this)}>{Localization.get("Cancel.Button")}</Button>
                    <Button type="primary" onClick={this.onAddUser.bind(this)}>{Localization.get("AddUser.Button")}</Button>
                </GridCell>
            </GridCell>
        );
    }
}

AddUser.propTypes = {
    dispatch: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired,
    newUserRegistrationDetails: PropTypes.object
};

function mapStateToProps(state) {
    return {
        newUserRegistrationDetails: state.users.newUserRegistrationDetails
    };
}

export default connect(mapStateToProps)(AddUser);