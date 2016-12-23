import ActionTypes from "constants/actionTypes/UserActionTypes";

export default function users(state = {
    list: [],
    totalCount: 0
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_USERS:
            return {
                ...state,
                list: action.payload.Results,
                totalCount: action.payload.TotalResults
            };
        default:
            return state;
    }
}
