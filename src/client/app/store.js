import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(reducer);

export default store;
