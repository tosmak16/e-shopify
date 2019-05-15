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
import SignInPage from '../pages/SignInPage/SignInPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

const AppContainer = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <WrappedRoute exact path="/app/products" component={<ShopPage />} />
          <WrappedRoute exact path="/app/products/:productId" component={<ProductDetails />} />
          <WrappedRoute exact path="/app/cart" component={<CartPage />} />
          <WrappedRoute exact path="/app/sign-up" component={<SignUpPage />} />
          <WrappedRoute exact path="/app/sign-in" component={<SignInPage />} />
          <WrappedRoute requiresAuth exact path="/app/profile" component={<ProfilePage />} />
          <WrappedRoute path="/" component={<ShopPage />} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default AppContainer;
