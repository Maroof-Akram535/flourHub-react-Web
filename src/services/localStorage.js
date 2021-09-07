var localStorgeObj = {
    getAccessToken() {
        var accestoken = window.sessionStorage.getItem("accessToken");
        return accestoken;
    },
    setItem(type, item) {
        window.sessionStorage.setItem(type, item);
    }
}
export default localStorgeObj;