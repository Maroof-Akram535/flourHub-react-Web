import '../'
import WheatFlourImage from '../assests/images/wheat_Flour.jpg'
import MaizeFlourImage from '../assests/images/shutterstock_240786739.jpg'
import RiceFlourImage from '../assests/images/Rice-flour-3_1400x.jpg'
import MilletFlourImage from "../assests/images/milletFlour.jpg"
export default function getProductDetails(productName) {
    if (productName === 'wheatFlour') {
        var details = { mainTitle: "Wheat Flour Products", title: "Brown Wheat Flour", description: "Fresh and Organic Wheat Flour", image: WheatFlourImage }
    }
    else if (productName === 'MaizeFlour') {
        var details = { mainTitle: "Maize Flour Products", title: "Maize Flour", description: "Fresh and Organic Maize Flour", image: MaizeFlourImage }
    }
    else if (productName === 'RiceFlour') {
        var details = { mainTitle: "Rice Flour Products", title: "Rice Flour", description: "Fresh and Organic Rice Flour", image: RiceFlourImage }
    }
    else {
        var details = { mainTitle: "Millet Flour Products", title: "Millet  Flour", description: "Fresh and Organic Millet Flour", image: MilletFlourImage }
    }
    return details;
}