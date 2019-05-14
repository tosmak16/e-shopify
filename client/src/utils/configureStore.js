import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers';

const initialState = {};
const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'customer'],
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
const store = createStore(
  connectRouter(history)(persistedReducer),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
const persistor = persistStore(store);

export { store, persistor, history };
