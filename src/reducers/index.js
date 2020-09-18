// Import combineReducer untuk menggabungkan semua file reducer
import { combineReducers } from 'redux';

// Import all reducer
import bahanReducer from './bahanReducer';
import transactionReducer from './transactionReducer';
import tambahProduct from './tambahProduct';

const rootReducer = combineReducers({
  bahan: bahanReducer,
  transaction: transactionReducer,
  product: tambahProduct
})

export default rootReducer;
