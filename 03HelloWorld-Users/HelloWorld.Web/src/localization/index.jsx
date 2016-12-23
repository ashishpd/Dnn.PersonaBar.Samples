import util from "utils";

const Localization = {
    get(key) {
        let moduleName = "HelloWorld";
        return util.getResx(moduleName, key);
    }
};
export default Localization;