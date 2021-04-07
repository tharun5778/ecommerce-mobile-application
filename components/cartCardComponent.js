import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class CartCardComponent extends Component{

  render(){
    return(
        <View style={styles.cartCard}>
            <View style={styles.cartCardContainer}>
                <View style={styles.cardImage}>
                <Image source={require('../assets/iphone.jpg')} style={{width:70, height:70}}/>
                </View>
                <View style={styles.cardMain}>
                    <Text style={styles.cardItemName}>{this.props.product.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontFamily:'Poppins-Medium', marginTop:3, fontSize: 13, color:'#0d51e0'}}>$ </Text>
                    <Text style={styles.cardItemPrice}>{this.props.product.price}</Text>
                    </View>
                </View>
                <View style={styles.cardQuantity}>
                  <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#8fe1eb', paddingLeft: 5, paddingRight: 5, borderRadius:50}} onPress={()=>this.props.increase(this.props.product)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={styles.quantityText}>{this.props.product.quantity}</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#8fe1eb', paddingLeft: 5, paddingRight: 5, borderRadius:50}} onPress={()=>this.props.decrease(this.props.product)}>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
        </View>

    )
  }
}

export default CartCardComponent;

const styles = StyleSheet.create({
    cartItemsContainer:{
      flex:12,
      marginLeft:25,
      marginRight:25,
    },
    priceContainer:{
      // flex:2,
      // backgroundColor:'#e3e3e3'
    },
    cartCard: {
      height: 100,
      borderRadius:20,
      backgroundColor:'#ffffff',
      marginTop: 15,
      // flexDirection: 'row'
    },
    cartCardContainer : {
      flex:1,
      flexDirection: 'row',
      marginTop: 5,
      marginLeft:10,
      marginBottom:5
    },
    cardImage: {
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    },
    cardMain:{
      flex: 4,
      justifyContent:'center',
    },
    cardQuantity : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    cardItemName:{
      fontFamily:'Poppins-Medium',
      fontSize:18,
      color: '#0d51e0'
    },
    cardItemPrice:{
      fontFamily:'Poppins-Medium',
      fontSize:20,
      color: '#0d51e0'
    },
    increaseButton:{
      // height:25,
      // width:25,
      paddingTop:5,
      paddingLeft:5,
      paddingBottom:5,
      paddingRight: 5,
      backgroundColor:'#8fe1eb',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      marginBottom: 4
    },
    decreaseButton:{
      height:25,
      width:25,
      backgroundColor:'#8fe1eb',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius:50
    },
    quantityText: {
      fontFamily:'Poppins-Medium',
      fontSize:15,
      color: '#000000'
    }
  
})


// 1 6 4 2