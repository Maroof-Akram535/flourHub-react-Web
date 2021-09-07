import React from 'react';
import { Store } from '../../store/store';
import API_REQUEST from '../../apiRequests/index';
const useCheckout = () => {
    var store = React.useContext(Store);
    const checkOut = () => {
        var index = 0;
        var confirmedOrderData = {
            productsId: [],
            userId: '',
            adress: '',
            phoneNumber: '',
            date: '',
            message: ""
        };
        store.state.cart.forEach(product => {
            confirmedOrderData.productsId[index] = product.productId;
            index++;
        })
        confirmedOrderData.userId = store.state.userInfo._id;
        confirmedOrderData.date = new Date();
        confirmedOrderData.adress = store.state.shippingDetails.customerAddress;
        confirmedOrderData.phoneNumber = store.state.shippingDetails.customerCellNumber;
        confirmedOrderData.message = "You have Booked an Order On Flour hub Thank you For Shopping !"
        API_REQUEST.addOrderDetails(confirmedOrderData);
    }
    return { checkOut };
}
export default useCheckout;