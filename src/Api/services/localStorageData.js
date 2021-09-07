var localStorgeObj = {
    getAccessToken() {
        var accestoken = window.sessionStorage.getItem('accestoken');
        return accestoken;
    }
}
export default localStorgeObj;
