import Counter from './components/Counter';
import Header from './components/Header';
import Cart from './components/Cart';
import React, { Fragment, useEffect } from 'react'
import Product from './components/Product';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/product-slice';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';
import { sendCartData } from './store/cart-slice';
let isInitial = true;


function App() {
  const showCart = useSelector(state => state.ui.showCart);
  const products = useSelector(state => state.product.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log('cart', cart);


  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart))

  }, [cart, dispatch])

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
