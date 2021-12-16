import classes from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
const Cart = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch();
    const handleAdd = (item) => {
        dispatch(cartActions.addNewItem(item));
    }
    const handleRemove = (item) => {
        dispatch(cartActions.removeItem(item));
    }
    return (
        <main className={classes.cart}>
            <h1>Your Shopping Cart</h1>
            {
                items.length ?
                    <div className={classes.item}>
                        {
                            items.map(item => {
                                const price = item.price.toLocaleString();
                                const totalPrice = item.totalPrice.toLocaleString();
                                return (
                                    <div key={item.idItem}>
                                        <div>
                                            <span> {item.name}</span>
                                            <span>${totalPrice}<p>(&{price}/item)</p></span>
                                        </div>
                                        <div>
                                            <span>x{item.quantity}</span>
                                            <span>
                                                <button onClick={() => handleRemove(item)}>-</button>
                                                <button onClick={() => handleAdd(item)}>+</button>
                                            </span>
                                        </div>
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div>
                        <p>
                            There are not products yet.
                        </p>
                    </div>
            }
        </main>
    );
};
export default Cart;