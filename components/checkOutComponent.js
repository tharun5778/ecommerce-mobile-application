import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


class CheckOutComponent extends Component{

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.priceContainer}>
                  {/* <Text style={styles.priceFontStyle}>$ {this.props.price}</Text> */}
                  {(this.props.price == 0) && (
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily: 'Poppins-Medium', marginTop:4}}>$ </Text>
                      <Text style={styles.priceFontStyle}>{this.props.price}.00</Text>
                    </View>
                  )}
                  {(!this.props.price == 0) && (
                    <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily: 'Poppins-Medium', marginTop:4}}>$ </Text>
                      <Text style={styles.priceFontStyle}>{this.props.price}.00</Text>
                  </View>
                  )}
          </View>
          <View style={styles.AddToCartContainer}>
                <TouchableOpacity style={styles.AddToCartDesign}>
                    <Text style={styles.AddTOCartFontStyle}>
                      <Icon name={'ios-log-out'} size={20} color="#ffffff" /> Check Out
                    </Text>
                </TouchableOpacity>
          </View>
      </View>
    )
  }
}

export default CheckOutComponent;

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
        alignItems: 'center',
        
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
        backgroundColor: '#0066cc',
        borderRadius:50,
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
        paddingLeft: 15,
        paddingRight:15
    },
    AddTOCartFontStyle:{
        fontFamily:'Poppins-Medium',
        fontSize:15,
        color:'#ffffff',
    },
    RemoveFromCartFontStyle:{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        color:'#000000',
        color: '#0d51e0'
    }

})


// 1 6 4 2