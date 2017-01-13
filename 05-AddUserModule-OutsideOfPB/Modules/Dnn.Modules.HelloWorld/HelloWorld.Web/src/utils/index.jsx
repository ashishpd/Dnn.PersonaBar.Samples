const utils = {
    init(sf) {
        if (!sf) {
            throw new Error("Utilities is undefined.");
        }
        this.sf = sf;
    },
    getObjectCopy: (_object) => {
        return JSON.parse(JSON.stringify(_object));
    },
    sf: null
};
export default utils;