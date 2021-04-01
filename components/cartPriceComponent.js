import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';


class CartPriceComponent extends Component{

  render(){
    return(
        <View style={styles.pricContainer}>
            <View style={styles.subtotal}>
                <Text style={styles.textFont}>Subtotal: $ 1250</Text>
            </View >
            <View style={styles.tax}>
                <Text style={styles.textFont}>Taxes: 40</Text>
            </View>
        </View>

    )
  }
}

export default CartPriceComponent;

const styles = StyleSheet.create({
    pricContainer:{
        flex:1,
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        marginTop:8
    },
    subtotal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tax:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textFont:{
        fontFamily:'Poppins-Medium',
        fontSize:18,
        color: '#000000'
    }
})


// 1 6 4 2