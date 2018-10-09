import { combineReducers } from 'redux';
import ProductsReducer from './reducer-products';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  products: ProductsReducer,
  form: formReducer
});

export default rootReducer;