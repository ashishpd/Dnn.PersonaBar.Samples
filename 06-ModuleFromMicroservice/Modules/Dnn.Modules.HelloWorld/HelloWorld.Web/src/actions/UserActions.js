import ActionTypes from "constants/actionTypes/UserActionTypes";
import UserService from "services/UserService";
import utils from "utils";

function errorCallback(message) {
    utils.notifyError(JSON.parse(message.responseText).Message, 5000);
}

const UserActions = {
    getData(callback) {
        return (dispatch) => {
            UserService.getData((data) => {
                dispatch({
                    type: ActionTypes.RETRIEVED_DATA,
                    payload: data
                });
                if (callback) {
                    callback(data);
                }
            }, errorCallback);
        };
    }
};

export default UserActions;
