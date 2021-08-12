import {Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/single-product/single-product';
import About from './components/pages/about/about';
import Minimal from './components/pages/minimal/minimal';
import Mailer from './components/pages/mailer/mailer';
import SingleProduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cart-page';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Canceled from './components/checkout/stripe-checkout/canceled';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/single-product' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/minimal' component={Minimal} />
        <Route path='/mailer' component={Mailer} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
        <Route path='canceled' component={Canceled} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
