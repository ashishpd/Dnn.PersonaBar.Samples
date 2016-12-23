import ActionTypes from "constants/actionTypes/UserActionTypes";
import UserService from "services/UserService";

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
            });
        };
    }
};

export default UserActions;
