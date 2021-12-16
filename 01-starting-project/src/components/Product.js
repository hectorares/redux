import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { cartActions } from '../store/cart-slice';

const Product = (props) => {
    const product = props.data;
    const price = product.price.toLocaleString();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(cartActions.addNewItem(product))
    }
    return (
        <main className={classes.product}>
            <div className={classes.row}>
                <span>
                    <h2>
                        {product.name}
                    </h2>
                </span>
                <div className={classes.price}>{price}$</div>
            </div>
            <div className={classes.row}>
                <span>
                    {product.description}
                </span>
                <span className={classes.right}>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </span>
            </div>

        </main>

    );
}

export default Product;