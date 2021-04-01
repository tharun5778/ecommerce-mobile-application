import productReducer from './reducers/productReducer';
import { createStore } from "redux";

const store = createStore(
    productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;


   