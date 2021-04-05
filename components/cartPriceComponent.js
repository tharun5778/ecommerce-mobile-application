import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';


class CartPriceComponent extends Component{
    constructor(props){
    super(props);
    this.state = {
      cartProducts:[],
      subTotal:0.00
    };
  }


  render(){
    return(
        <View style={styles.pricContainer}>
            <View style={styles.subtotal}>
                <Text style={styles.textFontcolor}>Subtotal: $</Text>
                <Text style={styles.textFont}> {this.props.subTotal}</Text>
            </View >
            <View style={styles.tax}>
                <Text style={styles.textFontcolor}>Taxes:</Text>
                <Text style={styles.textFont}> 40</Text>
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
        alignItems:'center', 
        flexDirection: 'row'
    },
    tax:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    textFont:{
        fontFamily:'Poppins-Medium',
        fontSize:18,
        color: '#000000'
    },
    textFontcolor:{
        fontFamily:'Poppins-Medium',
        fontSize:18,
        color: '#595959'
    }
})


// 1 6 4 2