import React from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "setProducts":
            return {
                ...state,
                products: action.payload
            };
        case "authenticateUser":
            return {
                ...state,
                userAuthenticated: true,
                userInfo: action.payload,
            };
        case "authenticateAdmin":
            return {
                ...state,
                adminAuthenticated: true,
                userInfo: action.payload,
            };
        case "addToCart":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "flushCart":
            return {
                ...state,
                cart: [],
            };
        case "removeFromCart":
            return {
                ...state,
                cart: action.payload
            };
        case 'shipingDetails':
            return {
                ...state,
                shippingDetails: action.payload
            };
        case 'setProductLocation':
            return {
                ...state,
                productLocation: action.payload
            }
    }
}
export default reducer;