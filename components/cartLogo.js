import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


class CartLogoComponent extends Component{

  render(){
    return(
        <View style={styles.container}>
            <Text style={styles.xStyle}>My Cart</Text>
        </View>
    )
  }
}

export default CartLogoComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    xStyle:{
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
        color:'#000000'
    },
})