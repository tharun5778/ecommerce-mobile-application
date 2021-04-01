import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import ProductDetailsComponent from "../components/productDetailsComponent";
import ProductPriceComponent from '../components/ProductPriceComponent';
import HeaderComponent from "../components/headerComponent";


class ProductDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      price: 0,
      colour:[],
      size:[],
      isAdded:false,
      offer:''
    };
  }
  componentDidMount(){
    const productDetails= this.props.route.params.productDetails;
    const color = productDetails.colour.map((i)=>{
      return {
        colour: i,
        isSelected: false
      }
    });
    const size = productDetails.size.map((i)=>{
      return {
        size: i,
        isSelected: false
      }
    });
    this.setState({ name:productDetails.name, 
      description:productDetails.description,
      offer:productDetails.offer, 
      price:productDetails.price,
      color: color,
      size: size,
    });
  }
  render(){
    // console.log("hi",this.state.size)
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderComponent/>
        </View>
        <View style={styles.body}>
            <View style={styles.main}>
            <View style={styles.offer}>
              <View style={styles.offer_design}>
                <View style={styles.offer_design_center}>
                  <Text style={styles.offer_font}>{this.state.offer}%</Text>
                </View>
              </View>
            </View>
            <View style={styles.background_1}>
              <View style={styles.image}>

              </View>
              <View style={styles.background_2}>
                <View style={styles.details}>
                  <ProductDetailsComponent name={this.state.name} 
                    description={this.state.description} 
                    colour={this.state.colour}
                    size={this.state.size}
                  />
                </View>
                <View style={styles.price}>
                  <ProductPriceComponent price={this.state.price}
                    isAdded={this.state.isAdded}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  main:{
      flex: 1,
  },
  offer:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  background_1:{
    flex:12,
    backgroundColor: '#ffffff'
  },
  image:{
    flex:6
  },
  background_2:{
    flex:6,
    backgroundColor:'#e3e3e3',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  details: {
    flex:4,
    // backgroundColor:'red'
  },
  price:{
    flex:2,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  },
  offer_design:{
    flex:1,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  offer_design_center:{
    backgroundColor: '#77d2d9',
    width:45,
    height:20,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:13,
  },
  offer_font:{
    fontFamily:'Poppins-Medium',
  },
  container:{
    flex:1,
    flexDirection:'column'
  },
  header:{
    flex: 2,
  },
  body:{
    flex:18,
  }
})


// 1 6 4 2
