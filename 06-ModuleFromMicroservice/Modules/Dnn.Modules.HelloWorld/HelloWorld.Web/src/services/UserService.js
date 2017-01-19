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
        return sf;
    }
    getData(callback, errorCallback) {
        const sf = this.getServiceFramework();
        sf.get({}, callback, errorCallback);
    }
}
const userService = new UserService();
export default userService;