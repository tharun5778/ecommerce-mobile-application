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
import ProductPriceComponent from "../components/ProductPriceComponent";


class CartScreen extends Component{

  render(){
    return(
        <View style={styles.container}>
          <View style={styles.cartItemsContainer}>
            <ScrollView>
              <FlatList
                data={products.Products}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) =>
                  <CartCardComponent product={item}
                    navigation={this.props.navigation}
                  /> 
                }
              />
            </ScrollView>
          </View>
          <View style={styles.priceContainer}>
            <CartPriceComponent/>
          </View>
          <View style={styles.checkOutContainer}>
            <ProductPriceComponent/>
          </View>
        </View>
    )
  }
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#e3e3e3'
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
  
})

