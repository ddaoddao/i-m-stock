import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductFormReducer from './ProductFormReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  auth: AuthReducer,
  productForm: ProductFormReducer,
  products: ProductReducer
});
