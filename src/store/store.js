import React from 'react';
export const Store = React.createContext();
import reducer from './reducers/index';
const initialState = {
    products: [],
    userAuthenticated: false,
    adminAuthenticated: false,
    cart: [],
    userInfo: {},
    shippingDetails: {},
    productLocation: ""
};
export const StoreContextProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
};