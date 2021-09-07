import React from 'react'
import { Store } from '../../store/store';
const usecheckDuplicates = () => {
    var store = React.useContext(Store);
    var [check, setCheck] = React.useState(false);
    var count = 1;
    React.useEffect(() => {
    }, [check])
    const checkDuplicate = (product_id) => {
        console.log("count before update", count);
        console.log("this is count", count);
        store.state.cart.forEach(product => {
            console.log("first");
            console.log("id cg", product.productId);
            if (product.productId === product_id) {
                setCheck(true);
            }
            else {
                console.log("hlo")
                setCheck(false);
            }
        });
        setCheck(true);
    }
    return { checkDuplicate, check };
}
export default usecheckDuplicates;