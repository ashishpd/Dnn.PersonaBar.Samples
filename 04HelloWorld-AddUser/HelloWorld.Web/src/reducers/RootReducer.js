import { combineReducers } from "redux";
import users from "./UsersReducer";

const rootReducer = combineReducers({
    users
});

export default rootReducer;
