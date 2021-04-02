import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { ADD, REMOVE } from "../redux/actions/productActions";
import ProductDetailsComponent from "../components/productDetailsComponent";
import ProductPriceComponent from '../components/ProductPriceComponent';
import HeaderComponent from "../components/headerComponent";
import { connect } from 'react-redux';



class ProductDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      price: 0,
      colour:[],
      size:[],
      isAdded:false,
      offer:'',
      id:''
    };
  }
  componentDidMount(){
    const productDetails= this.props.route.params.productDetails;
    const cartProducts = this.props.cartProducts;
    var isMatched = false;
    var matchedProductData = [];
    cartProducts.map((i)=>{
      if(i.id == productDetails.id){
        isMatched = true;
        matchedProductData = i;
      }
    })

    if(isMatched == true){
      this.setState({ name:matchedProductData.name, 
        description:matchedProductData.description,
        offer:productDetails.offer, 
        price:productDetails.price,
        colour: matchedProductData.colour,
        size: matchedProductData.size,
        id:productDetails.id,
        isAdded: true
      });
    }else{
      const color = productDetails.colour.map((i)=>{
        return {
          colour: i,
          isSelected: false
        }
      });
      const size = productDetails.size.map((i)=>{
        return {
          size: i,
          isSelected: false
        }
      });
      this.setState({ name:productDetails.name, 
        description:productDetails.description,
        offer:productDetails.offer, 
        price:productDetails.price,
        colour: color,
        size: size,
        id:productDetails.id
      });
    }

  }

  addToCart(){
    var cartProducts = this.props.cartProducts;
    var clr = false;
    var siz = false;
    this.state.colour.map((i)=>{
      if(i.isSelected == true){
        clr = true
      }
    })
    this.state.size.map((i)=>{
      if(i.isSelected == true){
        siz = true
      }
    })
    if((siz == true) && (clr == true)){
      if(this.props.cartProducts.length == 0){
        const addedProduct = {}
        addedProduct.name = this.state.name;
        addedProduct.description = this.state.description;
        addedProduct.price = this.state.price;
        addedProduct.size = this.state.size;
        addedProduct.colour = this.state.colour;
        addedProduct.id = this.props.route.params.productDetails.id;
        addedProduct.quantity = 1;
        cartProducts = [...cartProducts, addedProduct]
        this.props.add(cartProducts);
        this.setState({isAdded : true})
      }else{
        var isMatched = false;
        cartProducts.map((i)=>{
          if(i.id == this.state.id){
            isMatched = true;
          }
        })


        if(isMatched == false){
          const addedProduct = {}
          addedProduct.name = this.state.name;
          addedProduct.description = this.state.description;
          addedProduct.price = this.state.price;
          addedProduct.size = this.state.size;
          addedProduct.colour = this.state.colour;
          addedProduct.id = this.props.route.params.productDetails.id;
          addedProduct.quantity = 1;
          cartProducts = [...cartProducts, addedProduct]
          this.props.add(cartProducts)
          this.setState({isAdded : true})
        }else{
          alert("already added in the cart")
        }
      }
    }else{
      alert(" color or size is not selected")
    }
  }

  removeFromCart(){
    var cartProducts = this.props.cartProducts;
    remainingCartProducts = cartProducts.filter((i)=>{
      if(i.id == this.state.id){
        this.setState({isAdded: false})
      }
      return i.id != this.state.id;
    })
    this.props.remove(remainingCartProducts)
    console.log(remainingCartProducts)
  }

  sizeSelect(selectedSize){
    const allSizes = this.state.size;
    allSizes.map((i)=>{
      if(i.size == selectedSize){
       i.isSelected = true
      }else{
        i.isSelected = false
      }
    })
    this.setState({size:allSizes})
  }

  colourSelect(selectedColour){
    const allColours = this.state.colour;
    allColours.map((i)=>{
      if(i.colour == selectedColour){
        i.isSelected = true
      }else{
        i.isSelected = false
      }
    })
    this.setState({colour: allColours})
  }

  render(){
    // console.log("hi",this.state.isAdded)
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderComponent/>
        </View>
        <View style={styles.body}>
            <View style={styles.main}>
            <View style={styles.offer}>
              <View style={styles.offer_design}>
                <View style={styles.offer_design_center}>
                  <Text style={styles.offer_font}>{this.state.offer}%</Text>
                </View>
              </View>
            </View>
            <View style={styles.background_1}>
              <View style={styles.image}>

              </View>
              <View style={styles.background_2}>
                <View style={styles.details}>
                  <ProductDetailsComponent name={this.state.name} 
                    description={this.state.description} 
                    colour={this.state.colour}
                    size={this.state.size}
                    selectSize={this.sizeSelect.bind(this)}
                    selectColour={this.colourSelect.bind(this)} 
                  />
                </View>
                <View style={styles.price}>
                  <ProductPriceComponent price={this.state.price}
                    isAdded={this.state.isAdded}
                    add={this.addToCart.bind(this)}
                    remove={this.removeFromCart.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
      cartProducts: state.cartProducts,
    };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (cartProducts) => dispatch({ type: ADD, payload : { cartProducts: cartProducts} }),
    remove: (cartProducts) => dispatch({type: REMOVE , payload : {cartProducts: cartProducts}}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailsScreen);

const styles = StyleSheet.create({
  main:{
      flex: 1,
  },
  offer:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  background_1:{
    flex:12,
    backgroundColor: '#ffffff'
  },
  image:{
    flex:6
  },
  background_2:{
    flex:6,
    backgroundColor:'#e3e3e3',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  details: {
    flex:4,
    // backgroundColor:'red'
  },
  price:{
    flex:2,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  },
  offer_design:{
    flex:1,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  offer_design_center:{
    backgroundColor: '#77d2d9',
    width:45,
    height:20,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:13,
  },
  offer_font:{
    fontFamily:'Poppins-Medium',
  },
  container:{
    flex:1,
    flexDirection:'column'
  },
  header:{
    flex: 2,
  },
  body:{
    flex:18,
  }
})


// 1 6 4 2
