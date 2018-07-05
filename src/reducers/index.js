import { combineReducers } from 'redux';
import OfferReducer from './reducer_offer';
import AboutReducer from './reducer_about';

const rootReducer = combineReducers({
  offer: OfferReducer,
  about: AboutReducer
});

export default rootReducer;
