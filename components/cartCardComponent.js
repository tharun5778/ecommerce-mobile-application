import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class CartCardComponent extends Component{

  render(){
    return(
        <View style={styles.cartCard}>
            <View style={styles.cartCardContainer}>
                <View style={styles.cardImage}>
                    <Text>image</Text>
                </View>
                <View style={styles.cardMain}>
                    <Text style={styles.cardItemName}>{this.props.product.name}</Text>
                    <Text style={styles.cardItemPrice}>$ {this.props.product.price}</Text>
                </View>
                <View style={styles.cardQuantity}>
                    <TouchableOpacity style={styles.increaseButton} onPress={()=>this.props.increase(this.props.product)} >
                        <Text style={styles.quantityText}>
                        +
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{this.props.product.quantity}</Text>
                    <TouchableOpacity style={styles.decreaseButton} onPress={()=>this.props.decrease(this.props.product)} >
                        <Text style={styles.quantityText}>
                        -
                        </Text>
                    </TouchableOpacity>
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
      flex:2
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
      height:25,
      width:25,
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