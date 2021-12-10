import classes from './Cart.module.css'

const Cart = () => {
    const handleAdd = () => {
    }
    const handleRemove = () => {
    }
    return (
        <main className={classes.cart}>
            <h1>Your Shopping Cart</h1>
            <div className={classes.item}>
                <div>
                    <span>Test item</span>
                    <span>$18.00 <p>(&6.00/item)</p></span>
                </div>
                <div>
                    <span>x3</span>
                    <span>
                        <button onClick={handleRemove}>-</button>
                        <button onClick={handleAdd}>+</button>
                    </span>
                </div>
            </div>
        </main>
    );
};
export default Cart;