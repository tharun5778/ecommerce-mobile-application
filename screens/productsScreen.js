import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import products from '../productsData.json';
import ProductsComponents from '../components/productsComponent'
import HeaderComponent from "../components/headerComponent";
import { connect } from 'react-redux';

class ProductsScreen extends Component{

  render(){
      console.log(this.props.products)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderComponent/>
            </View>
            <View style={styles.body}>
                <View style={styles.background}>
                    <ScrollView>
                        <View style={styles.split}>
                            <View style={styles.split_products}>
                                <Text style={styles.split_products_font}>Our Products</Text>
                            </View>
                            <View style={styles.split_sort}>
                                <Text style={styles.split_sort_font}>Sort by</Text>
                            </View>
                        </View>
                        <View style={styles.hor_scrollview}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>hello</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.products}>
                            <FlatList
                            numColumns={2}
                            data={this.props.products}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) =>
                                <ProductsComponents product={item}
                                navigation={this.props.navigation}
                                /> 
                                }
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
  }
}
const mapStateToProps = state => {
    return {
        products: state.products,
    };
};
export default connect(mapStateToProps)(ProductsScreen);

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginLeft: 5,
        marginRight:5
    },
    split:{
        flex: 1,
        flexDirection: 'row'
    },
    split_products:{
        flex: 1,
        flexDirection: 'row',
        // marginLeft: 15,
        marginTop:5,
    },
    split_sort:{
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 15,
        marginLeft: 15,
        
    },
    split_products_font: {
        fontSize: 25,
        fontFamily: 'Poppins-Medium'
    },
    split_sort_font:{
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color:'#828282'
    },
    product_types:{
        marginLeft: 15
    },
    hor_scrollview : {
        marginTop: 15,
        // marginRight: 10,
        // marginLeft: 10
    },
    item:{
        height: 35,
        width: 100,
        backgroundColor: 'red',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10
    },
    products: {
        marginTop: 20, 
    },
    container:{
        flex:1,
        flexDirection: 'column',
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 18,
    }
})