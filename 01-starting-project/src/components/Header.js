import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
      {/* <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li> */}
      {/* <li>
            <button>Logout</button>
          </li> */}
      <div className={classes.cartCounter} onClick={toggleCartHandler}>
        My cart
        <div className={classes.cartBadge}>
          {totalQuantity}
        </div>
      </div>
    </header>
  );
};

export default Header;
