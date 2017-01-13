import ActionTypes from "constants/actionTypes/UserActionTypes";

function getNewUser() {
    return {
        firstName: {
            value: "",
            error: false
        },
        lastName: {
            value: "",
            error: false
        },
        email: {
            value: "",
            error: false
        },
        userName: {
            value: "",
            error: false
        },
        password: {
            value: "",
            error: false
        },
        confirmPassword: {
            value: "",
            error: false
        },
        randomPassword: {
            value: false,
            error: false
        },
        authorize: {
            value: true,
            error: false
        },
        notify: {
            value: false,
            error: false
        }
    };
}

export default function users(state = {
    list: [],
    totalCount: 0,
    selectedTab: 0,
    newUserRegistrationDetails: getNewUser()
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_USERS:
            return {
                ...state,
                list: action.payload.Results,
                totalCount: action.payload.TotalResults
            };
        case ActionTypes.UPDATE_NEW_USER_DETAILS:
            return {
                ...state,
                newUserRegistrationDetails: action.payload
            };
        case ActionTypes.CREATED_USER:
            return {
                ...state,
                list: state.list.concat(action.payload),
                totalCount: Object.assign(state.totalCount) + 1
            };
        case ActionTypes.CLEAR_NEW_USER:
            return {
                ...state,
                newUserRegistrationDetails: getNewUser()
            };
        case ActionTypes.SWITCH_TAB:
            return {
                ...state,
                selectedTab: action.payload
            };
        default:
            return state;
    }
}
