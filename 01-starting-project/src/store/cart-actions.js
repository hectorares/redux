import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotificacion({
            status: 'pending',
            title: 'Pending',
            message: 'Sending request...'
        }));

        const request = async () => {
            const response = await fetch('https://cart-dbb91-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
            });
            if (!response.ok) {
                throw new Error('Sending cart has failed.')
            }
        }

        try {
            await request();
            dispatch(uiActions.showNotificacion({
                status: 'success',
                title: 'Success',
                message: 'Cart has been updated!.'
            }))
        } catch (err) {
            console.error('Error', err);
            dispatch(uiActions.showNotificacion({
                status: 'error',
                title: 'Error',
                message: 'Adding product has failed.'
            }))
        }
    }
}

export const getCartData = () => {
    return async (dispatch) => {
        const getCart = async () => {
            const response = await fetch('https://cart-dbb91-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Getting cart has failed.')
            }
            const data = response.json();
            return data;
        }
        try {
            const cart = await getCart();
            dispatch(cartActions.replaceCart({
                items: cart.items || [],
                totalQuantity: cart.totalQuantity
            }))
        } catch (err) {
            dispatch(uiActions.showNotificacion({
                status: 'error',
                title: 'Error',
                message: 'Error fetching cart.'
            }))
        }
    }
}