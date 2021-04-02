import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetailsComponent from "../components/productDetailsComponent";


class ProductPriceComponent extends Component{

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.priceContainer}>
                  <Text style={styles.priceFontStyle}>$ {this.props.price}</Text>
          </View>
          <View style={styles.AddToCartContainer}>
              <TouchableOpacity style={styles.AddToCartDesign} onPress={()=>this.props.add()}>
                  {(this.props.isAdded == false) && (
                      <Text style={styles.AddTOCartFontStyle}>Add to cart</Text>
                  )}
                  {!(this.props.isAdded == false) && (
                      <Text style={styles.RemoveFromCartFontStyle}>Remove from cart</Text>
                  )}
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

export default ProductPriceComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        marginTop: 15,
        marginLeft:25
    },
    priceContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AddToCartContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    priceFontStyle:{
        fontFamily:'Poppins-Medium',
        fontSize:25,
        color:'#000000'
    },
    AddToCartDesign: {
        width:150,
        height:45,
        backgroundColor: '#e3e3e3',
        borderRadius:50,
        justifyContent: 'center',
        alignItems:'center'
    },
    AddTOCartFontStyle:{
        fontFamily:'Poppins-Medium',
        fontSize:20,
        color:'#000000',
        color: '#0d51e0'
    },
    RemoveFromCartFontStyle:{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        color:'#000000',
        color: '#0d51e0'
    }

})


// 1 6 4 2