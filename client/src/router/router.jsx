import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor, history } from '../utils/configureStore';
import WrappedRoute from './WrappedRoute/WrappedRoute';
import ShopPage from '../pages/shop/ShopPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import CartPage from '../pages/CartPage/CartPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const AppContainer = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <WrappedRoute exact path="/products" component={<ShopPage />} />
          <WrappedRoute exact path="/products/:productId" component={<ProductDetails />} />
          <WrappedRoute exact path="/cart" component={<CartPage />} />
          <WrappedRoute exact path="/sign-up" component={<SignUpPage />} />

          <WrappedRoute exact path="/" component={<ShopPage />} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default AppContainer;
