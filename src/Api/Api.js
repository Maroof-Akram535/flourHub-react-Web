import React from 'react';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import getTokens from './services/localStorageData'
var apiObj = {
    API_PAth: "http://localhost:9000/admin/",
    refreshAuthLogic: failedRequest => axios({ method: "POST", url: "http://localhost:9000/refreshToken", headers: { 'Authorization': 'Token ' + getTokens.getAccessToken() } }).then(tokenRefreshResponse => {
        localStorage.setItem('accessToken', tokenRefreshResponse.data);
        failedRequest.response.config.headers['Authorization'] = 'Token ' + tokenRefreshResponse.data;
        return Promise.resolve();
    }),
    SendData: function (userData) {
        console.log("sending");
        axios({
            method: "POST",
            url: this.API_PAth + "add-users",
            data: userData
        }).then(res => {
        }).catch(err => {
        })
    },
    FetchData: function () {
        createAuthRefreshInterceptor(axios, this.refreshAuthLogic);
        var token = getTokens.getAccessToken();
        return axios({
            method: "get",
            url: this.API_PAth + "users",
            headers: {
                'Authorization': 'Token ' + token
            }
        }).then(res => {
            console.log(res.status);
            return res;
        }).catch(err => {
            console.log('this is error', err)
        })
    },
    UpdateData: function () {
        axios({
            method: "put",
            url: this.API_PAth + "update-users"
        })
    },
    deleteData: function () {
        axios({
            method: "delete",
            url: this.API_PAth + "delete-users"
        })
    },
    loginUser: function (data) {
        axios({
            method: 'POST',
            url: "http://localhost:9000/login-users",
            data: data,
        }).then(res => {
            var accestoken = res.data.accessToken;
            console.log("Token Comming From Server", accestoken);
            sessionStorage.setItem('accestoken', accestoken);
        })
    }
}
export default apiObj;
