import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import spot from '../spot/spot-reducer';
import checkoutReducer from '../checkout/checkout-reducer';

export default (history) =>
  combineReducers({
    spot,
    checkoutReducer,
    router: connectRouter(history),
  });
