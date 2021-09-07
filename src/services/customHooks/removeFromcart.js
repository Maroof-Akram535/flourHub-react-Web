import React from 'react';
import { Store } from '../../store/store';
const useRemoveFromCart = () => {
    var store = React.useContext(Store);
    const removeFromCart = (item_id) => {
        var filtereditems = store.state.cart.filter(function (items) {
            return items.productId !== item_id;
        })
        store.dispatch({ type: "removeFromCart", payload: filtereditems });

    }
    return { removeFromCart };

}
export default useRemoveFromCart;