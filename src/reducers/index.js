import { combineReducers } from 'redux';
import OfferReducer from './reducer_offer';

const rootReducer = combineReducers({
  offer: OfferReducer
});

export default rootReducer;
