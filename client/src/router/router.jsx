import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store, { history } from '../utils/configureStore';
import ShopPage from '../pages/shop/ShopPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

const AppContainer = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/products" component={ShopPage} />
        <Route path="/products/:productId" component={ProductDetails} />
        <Route component={() => <div>CLIENT IS RUNNING</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default AppContainer;
