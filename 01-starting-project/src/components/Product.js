import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Product = () => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(uiActions.toggle())
    }
    return (
        <main className={classes.product}>
            <div className={classes.row}>
                <span>
                    <h2>
                        Test
                    </h2>
                </span>
                <div className={classes.price}>$6.00</div>
            </div>
            <div className={classes.row}>
                <span>
                    This is a first product
                </span>
                <span className={classes.right}>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </span>
            </div>

        </main>

    );
}

export default Product;