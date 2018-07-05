import { combineReducers } from 'redux';
import OfferReducer from './reducer_offer';
import AboutReducer from './reducer_about';
import ProjectsListReducer from './reducer_projectsList';

const rootReducer = combineReducers({
  offer: OfferReducer,
  about: AboutReducer,
  projectsList: ProjectsListReducer
});

export default rootReducer;
