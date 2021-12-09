import Counter from './components/Counter';
import Header from './components/Header';
import Cart from './components/Cart';
import React, {Fragment} from 'react'
import Product from './components/Product';

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Product />
    </Fragment>

  );
}

export default App;
