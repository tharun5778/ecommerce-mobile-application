import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CartCardComponent from "../components/cartCardComponent";
import products from '../productsData.json';
import CartPriceComponent from "../components/cartPriceComponent";
import CheckOutComponent from "../components/checkOutComponent";
import HeaderComponent from "../components/headerComponent";
import { QUANTITYCHANGE } from "../redux/actions/productActions";
import { connect } from 'react-redux';
import CartLogoComponent from "../components/cartLogo";
import MenuComponent from "../components/menuComponent";
import Icon from 'react-native-vector-icons/Ionicons';



class CartScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      cartProducts:[],
      subTotal:0.00,
      tax:40
    };
  }

  componentDidMount(){
    
    var price = 0;
    this.props.cartProducts.map((i)=>{
      price = price + (i.price * i.quantity)
    })
    this.setState({cartProducts:this.props.cartProducts, subTotal: price});
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      var price = 0;
      this.props.cartProducts.map((i)=>{
        price = price + (i.price * i.quantity)
      })
      this.setState({cartProducts:this.props.cartProducts, subTotal: price});
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }


  increaseQuantity(product){
    var cartProducts= this.props.cartProducts;
    cartProducts.map((i)=>{
      if(i.id == product.id){
        if(i.quantity < 10){
          i.quantity = i.quantity + 1;
        }
      }
    });
    this.setState({cartProducts:cartProducts})
    this.props.quantityChange(cartProducts);
    this.subTotal()
  }

  decreaseQuantity(product){
    var cartProducts= this.props.cartProducts;
    cartProducts.map((i)=>{
      if(i.id == product.id){
        if(i.quantity > 1){
          i.quantity = i.quantity - 1;
        }
      }
    });
    this.setState({cartProducts:cartProducts})
    this.props.quantityChange(cartProducts);
    this.subTotal()
  }

  subTotal(){
    var price = 0;
    this.props.cartProducts.map((i)=>{
      price = price + (i.price * i.quantity)
    })
    this.setState({subTotal: price})
    // return (price)
  }

  back(){
    this.props.navigation.goBack(null)
  }

  render(){
    return(
      <View style={styles.maincontainer}>
        <View style={styles.header}>
          <HeaderComponent back={<Icon name={"arrow-back"} size={25} color="#000000" />} goback={this.back.bind(this)} right={<Icon name={"ios-trash-bin-sharp"} size={25} color="#000000" />} center={<CartLogoComponent/>} style={{backgroundColor:'#ffffff', flex: 1, flexDirection:'row'}}/>
        </View>
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.cartItemsContainer}>
            {(this.props.cartProducts.length == 0) && (
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20, color:'#000000'}}>Cart is empty</Text>
              </View>
            )}
            {(!this.props.cartProducts.length == 0) && (
              <ScrollView  showsVerticalScrollIndicator={false}>
                <FlatList
                  data={this.props.cartProducts}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({ item, index }) =>
                    <CartCardComponent product={item}
                      navigation={this.props.navigation}
                      increase = {this.increaseQuantity.bind(this)}
                      decrease = {this.decreaseQuantity.bind(this)}
                    /> 
                  }
                />
              </ScrollView>
            )}
            </View>
            <View style={styles.priceContainer}>
              <CartPriceComponent subTotal = {this.state.subTotal}/>
            </View>
            <View style={styles.checkOutContainer}>
              <CheckOutComponent price={this.state.subTotal} tax={this.state.tax}/>
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
    quantityChange: (cartProducts) => dispatch({ type: QUANTITYCHANGE, payload : { cartProducts: cartProducts} }),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#e3e3e3',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
  },
  cartItemsContainer:{
    flex:12,
    marginLeft:25,
    marginRight:25,
  },
  priceContainer:{
    flex:2,
    backgroundColor:'#e3e3e3',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  checkOutContainer:{
    flex:2,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  },
  maincontainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#ffffff'
  },
  header:{
    flex: 2,
  },
  body:{
    flex:18,
  }
  
})

