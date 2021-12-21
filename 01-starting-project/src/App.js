import Counter from './components/Counter';
import Header from './components/Header';
import Cart from './components/Cart';
import React, { Fragment, useEffect } from 'react'
import Product from './components/Product';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/product-slice';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';
import { sendCartData, getCartData } from './store/cart-actions';
import { fecthProductsData } from './store/product-actions';
let isInitial = true;


function App() {
  const showCart = useSelector(state => state.ui.showCart);
  const products = useSelector(state => state.product.products);
  const cart = useSelector((state) => state.cart);
  const cartChanged = useSelector(state => state.cart.changed);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fecthProductsData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cartChanged) {
      dispatch(sendCartData(cart))
    }


  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch]);




  return (
    <Fragment>
      <Notification />
      <Header />
      {showCart && <Cart />}
      {products.map(product => {
        return (
          <Product
            key={product.idItem}
            idItem={product.idItem}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        )
      })}
    </Fragment>
  );
}

export default App;
