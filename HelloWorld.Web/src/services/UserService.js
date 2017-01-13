import util from "utils";

function serializeQueryStringParameters(obj) {
    let s = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            s.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return s.join("&");
}

class UserService {
    getServiceFramework() {
        let sf = util.sf;

        sf.moduleRoot = "PersonaBar";
        sf.controller = "Users";

        return sf;
    }
    getUsers(searchParameters, callback, errorCallback) {
        const sf = this.getServiceFramework();

        sf.get("GetUsers?" + serializeQueryStringParameters(searchParameters), {}, callback, errorCallback);
    }
    createUser(userDetails, callback, errorCallback) {
        const sf = this.getServiceFramework("Users");
        sf.post("CreateUser", userDetails, callback, errorCallback);
    }
}
const userService = new UserService();
export default userService;