import ActionTypes from "constants/actionTypes/UserActionTypes";
import UserService from "services/UserService";
import utils from "utils";

function errorCallback(message) {
    utils.notifyError(JSON.parse(message.responseText).Message, 5000);
}
const UserActions = {
    getUsers(searchParameters, callback) {
        return (dispatch) => {
            UserService.getUsers(searchParameters, (data) => {
                dispatch({
                    type: ActionTypes.RETRIEVED_USERS,
                    payload: data
                });
                if (callback) {
                    callback(data);
                }
            }, errorCallback);
        };
    },
    updateNewUserDetails(newUserDetails, callback) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.UPDATE_NEW_USER_DETAILS,
                payload: newUserDetails
            });
            if (callback) {
                callback();
            }
        };
    },
    createUser(userDetails, callback) {
        return (dispatch) => {
            UserService.createUser(userDetails, data => {
                dispatch({
                    type: ActionTypes.CREATED_USER,
                    payload: data
                });
                if (callback) {
                    callback(data);
                }
            }, errorCallback);
        };
    },
    clearNewUser(callback) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.CLEAR_NEW_USER
            });
            if (callback) {
                callback();
            }
        };
    },
    switchTab(index, callback) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.SWITCH_TAB,
                payload: index
            });
            if (callback) {
                callback();
            }
        };
    }
};

export default UserActions;
