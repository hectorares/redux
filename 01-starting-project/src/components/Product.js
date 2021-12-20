import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Product = (props) => {
    const {idItem, name, description, price } = props;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(cartActions.addNewItem({
            idItem,
            name,
            price,
            description
        }
        ))
    }
    return (
        <main className={classes.product}>
            <div className={classes.row}>
                <span>
                    <h2>
                        {name}
                    </h2>
                </span>
                <div className={classes.price}>{price.toLocaleString()}$</div>
            </div>
            <div className={classes.row}>
                <span>
                    {description}
                </span>
                <span className={classes.right}>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </span>
            </div>

        </main>

    );
}

export default Product;