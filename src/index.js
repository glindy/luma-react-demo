import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import About from './containers/About'
import Cart from './containers/Cart'
import Wishlist from './containers/Wishlist'
import Home from './containers/Home'
import SingleProduct from './containers/SingleProduct'
import Checkout from './containers/Checkout'
import Confirm from './containers/Confirm'
import Products from './containers/Products'
import MensProducts from './containers/MensProducts'
import WomensProducts from './containers/WomensProducts'
import GearProducts from './containers/GearProducts'
import YogaProducts from './containers/YogaProducts'
import Blog from './containers/Blog'
import LumaPlus from './containers/LumaPlus'
import SignupConfirm from './containers/SignupConfirm'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom' 
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history' 
import withAnalytics from './utils/withAnalytics'; // Import HOC



const TrackedApp = withAnalytics(App);


const dispatchCustomEvent = (eventName, target) => {
  const event = new CustomEvent(eventName);
  target.dispatchEvent(event);
  console.log(`[index.js] Custom event '${eventName}' dispatched`);
};

const AppWithEvents = withRouter((props) => {
  React.useEffect(() => {
    // Dispatch event on first page load top
    if (window.location.pathname === '/') {
      setTimeout(() => {

      dispatchCustomEvent("page-load-top", document.body);}, 300)

      // Fire page-load-end on first load
      setTimeout(() => {
        dispatchCustomEvent("page-load-bottom", document.getElementById('app'));
      }, 1000); 

// Generate JS cookie
    function generateLumaId() {
      return Math.floor(Math.random() * 10000000) + 90000000;
    }

    if (!document.cookie.includes('lumaCookie=')) {
      const lumaId = generateLumaId();
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString(); // 24 hours
      document.cookie = `lumaCookie=${lumaId}; path=/; expires=${expires}`;
    }


    }

    // Dispatch events on every route change
    const handleRouteChange = () => {
      dispatchCustomEvent("page-load-top", document.body);

      setTimeout(() => {
        dispatchCustomEvent("page-load-bottom", document.getElementById('app'));
      }, 1000); 
    };

    props.history.listen(handleRouteChange); 

    return () => {
      props.history.unlisten(handleRouteChange); // Clean up listener
    };
  }, [props.history]);

  return <TrackedApp {...props} />;
});



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AppWithEvents>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/products" component={Products} />
          <Route path="/mensproducts" component={MensProducts} />
          <Route path="/womensproducts" component={WomensProducts} />
          <Route path="/gearproducts" component={GearProducts} />
          <Route path="/yogaproducts" component={YogaProducts} />
          <Route path="/blog" component={Blog} />
          <Route path="/lumaplus" component={LumaPlus} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/signupconfirm" component={SignupConfirm} />
        </Switch>
      </AppWithEvents>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);