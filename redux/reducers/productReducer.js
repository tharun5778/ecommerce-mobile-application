import Products from '../../productsData.json';
import { ADD } from "../actions/productActions";
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
    return state
}
  
export default productReducer;