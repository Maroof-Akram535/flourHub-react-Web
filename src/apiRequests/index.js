import axios from 'axios';
import getTokens from '../services/localStorage';
var apiObj = {
    API_PAth: "http://localhost:9000/flourhub/",
    createUser: function (data) {
        return axios({
            method: "POST",
            url: this.API_PAth + "signUp",
            data: data
        }).then(res => {
            console.log(res.data);
            return (res.data);
        }).catch(err => {
        })
    },
    createProduct: function (productDetails) {
        console.log("Product Details ",productDetails);
        return axios({
            method: "POST",
            url: this.API_PAth + "admin/addProduct",
            data: productDetails
        }).then(res => {
            return (res.data);
        }).catch(err => {
        })
    },
    showAllProduct: function () {
        return axios({
            method: 'get',
            url: this.API_PAth + "admin/showAllProducts",
        }).then(products => {
            return products.data;
        })
    },
    deleteProduct: function (id) {
        return axios({
            method: 'delete',
            url: this.API_PAth + "admin/deleteProduct",
            data: id
        }).then(results => {
            return results.data;
        })
    },
    deleteOrder: function (id) {
        console.log("this is id", id)
        return axios({
            method: 'delete',
            url: this.API_PAth + "admin/deleteOrder",
            data: id
        }).then(results => {
            return results.data;
        })
    },
    loginUser: function (data) {
        return axios({
            method: 'POST',
            url: this.API_PAth + "login",
            data: data,
        }).then(res => {
            console.log(res.data);
            return res;
        })
    },
    findProducts: function (productName) {
        var token = getTokens.getAccessToken();
        return axios({
            method: 'get',
            url: this.API_PAth + "findProducts",
            params: { productName },
            headers: {
                'Authorization': 'Token ' + token
            }
        }).then(products => {
            return products.data;
        })
    },
    addOrderDetails: function (orderDetails) {
        return axios({
            method: 'post',
            url: this.API_PAth + '/addToOrders',
            data: orderDetails
        }).then(res => {
            return res;
        })
    },
    showAllOrderDetails: function () {
        return axios({
            method: 'get',
            url: this.API_PAth + 'admin/showAllorders',
        }).then(res => {
            return res.data;
        })
    },
    updateProduct: function (productInfo) {
        return axios({
            method: 'PUT',
            url: this.API_PAth + 'admin/updateProduct',
            data: productInfo
        }).then(res => {
            return res.data;
        })
    },
    updateOrderStatus: function (details) {
        console.log("Theses detauisa", details)
        return axios({
            method: 'PUT',
            url: this.API_PAth + 'admin/updateOrderStatus',
            data: details
        })
    }
}
export default apiObj;
