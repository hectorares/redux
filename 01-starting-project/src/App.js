import Counter from './components/Counter';
import Header from './components/Header';
import Cart from './components/Cart';
import React, { Fragment } from 'react'
import Product from './components/Product';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/product-slice';



function App() {
  const showCart = useSelector(state => state.ui.showCart);
  const products = useSelector(state => state.product.products);

  return (
    <Fragment>
      <Header />
      {showCart && <Cart />}
      {products.map(product => {
        return (
          <Product  key={product.idItem} data={product} />
        )
      })}
    </Fragment>
  );
}

export default App;
