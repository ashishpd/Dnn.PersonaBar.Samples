import ActionTypes from "constants/actionTypes/UserActionTypes";

export default function users(state = {
    list: []
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_DATA:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}
