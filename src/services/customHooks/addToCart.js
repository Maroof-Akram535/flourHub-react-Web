import React from 'react';
import { Store } from '../../store/store';
const useAddToCart = () => {
    var store = React.useContext(Store);
    const addToCart = (productdetails) => {
        store.dispatch({ type: "addToCart", payload: productdetails });
    }
    return { addToCart };
}
export default useAddToCart;