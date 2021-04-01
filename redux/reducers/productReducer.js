import Products from '../../productsData.json';

const initialStore = {
    products: Products.Products,
    cartProducts: [],
    likedProducts: [],
}

function productReducer(state = initialStore, action) {
    return state
}
  
export default productReducer;