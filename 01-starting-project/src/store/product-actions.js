import { uiActions } from "./ui-slice";
import { productActions } from "./product-slice";
export const fecthProductsData = () => {
    return async (dispatch) => {
        const getproducts = async () => {
            const response = await fetch('https://cart-dbb91-default-rtdb.firebaseio.com/products.json');
            if (!response.ok) {
                throw new Error('Getting products has failed.')
            }
            const data = response.json();
            return data;
        }
        try {
            const products = await getproducts();
            dispatch(productActions.setProducts(products.items || []))

        } catch (err) {
            dispatch(uiActions.showNotificacion({
                status: 'error',
                title: 'Error',
                message: 'Error fetching products.'
            }))
        }

    }
}