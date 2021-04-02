import Products from '../../productsData.json';
import { ADD, QUANTITYCHANGE, REMOVE } from "../actions/productActions";
const initialStore = {
    products: Products.Products,
    cartProducts: [],
    likedProducts: [],
}

function productReducer(state = initialStore, action) {
    if(action.type == ADD){
        console.log('state',action.payload.cartProducts)
        return {...state, cartProducts : action.payload.cartProducts}
    }
    if(action.type == REMOVE){
        console.log('state',action.payload.cartProducts)
        return {...state, cartProducts : action.payload.cartProducts}
    }
    if(action.type == QUANTITYCHANGE){
        console.log('state',action.payload.cartProducts)
        return {...state, cartProducts : action.payload.cartProducts}
    }
    return state
}
  
export default productReducer;