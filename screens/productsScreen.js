import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import products from '../productsData.json';
import ProductsComponents from '../components/productsComponent'
import HeaderComponent from "../components/headerComponent";
import { connect } from 'react-redux';

class ProductsScreen extends Component{


    back(){
        alert("hello");
    }

  render(){
      console.log(this.props.products)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderComponent back={"menu"} goback={this.back.bind(this)} right={"search"} style={{backgroundColor:'#f2f2f2', flex: 1, flexDirection:'row'}}/>
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
                                    <View >
                                        <Image source={require('../assets/iphone.jpg')} style={{width:30, height:30}}/>
                                    </View>
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.horScrollFont}>Sneakers</Text>
                                    </View>
                                </View>
                                <View style={styles.item}>
                                    <View>
                                        <Image source={require('../assets/iphone.jpg')} style={{width:30, height:30}}/>
                                    </View>
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.horScrollFont}>watch</Text>
                                    </View>
                                </View>
                                <View style={styles.item}>
                                    <View>
                                        <Image source={require('../assets/iphone.jpg')} style={{width:30, height:30}}/>
                                    </View>
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.horScrollFont}>Backpak</Text>
                                    </View>
                                </View>
                                <View style={styles.item}>
                                    <View>
                                        <Image source={require('../assets/iphone.jpg')} style={{width:30, height:30}}/>
                                    </View>
                                    <View style={{marginLeft:8}}>
                                        <Text style={styles.horScrollFont}>Mobiles</Text>
                                    </View>
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
        marginLeft: 15,
        marginTop:5,
    },
    horScrollFont:{
        fontFamily:'Poppins-Medium',
        fontSize:15,
        color: '#0d51e0'
    },
    split_sort:{
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 15,
        marginLeft: 15,
        
    },
    split_products_font: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold'
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
        marginLeft: 15
    },
    item:{
        // height: 35,
        // width: 100,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        paddingLeft:20,
        backgroundColor: '#ffffff',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
        flexDirection:'row'
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