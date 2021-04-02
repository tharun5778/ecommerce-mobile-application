import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




class ProductsComponents extends Component{
    constructor(props){
        super(props);
        this.state = {
          isLiked:false
        };
      }

      like(){
        this.setState({isLiked: ! this.state.isLiked})
    }

  render(){
    //   console.log(this.props.product)
    return(
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details', { productDetails:this.props.product, isLiked:this.state.isLiked})}>
            <View style={styles.product_item}>
                <View style={styles.align}>
                    <View style={styles.top}>
                        <View style={styles.offer}>
                            <View style={styles.offer_design}>
                                <Text style={styles.offer_font}>{this.props.product.offer}%</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.like}>
                                <TouchableOpacity onPress={()=>this.like()}>
                                    {/* <TouchableOpacity> */}
                                        <Text>
                                            <Icon name={"heart-circle"} size={20} color={this.state.isLiked == true? "red": "#000000" } />
                                        </Text>
                                    {/* </TouchableOpacity> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={require('../assets/iphone.jpg')}/>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.details_name}>{this.props.product.name}</Text>
                        <Text style={styles.details_price}>$ {this.props.product.price}</Text>
                        <Text style={styles.details_rating}>{this.props.product.Rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}

export default ProductsComponents;

const styles = StyleSheet.create({
    product_item:{
        // flex: 1,
        height: 340,
        width: (((Dimensions.get('window').width -40)/2)),
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginBottom:10,
        borderRadius:13
    },
    align: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 5
    },
    top: {
        // flex: 1,
        flexDirection: 'row'
    },
    offer: {
        flex: 1,
        flexDirection: 'row',

    },
    like: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    offer_design:{
        width: 45,
        height:20,
        backgroundColor:'#77d2d9',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 13
    },
    like_design:{
        width: 50,
        height:25,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 13
    },
    container: {
        flex:1,
        flexDirection:'column',
        // backgroundColor:'red',
    },
    image:{
        flex:2,
        // backgroundColor:'red'
        alignItems: 'center',
        justifyContent:'center'
    },
    details:{
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    details_name: {
        fontSize: 18,
        // marginTop: 3,
        fontFamily:'Poppins-Medium',
        // marginBottom: 5
    },
    details_price:{
        fontSize: 23,
        fontFamily:'Poppins-Medium',
    },
    details_rating:{
        fontFamily:'Poppins-Medium',
        fontSize:15,
        marginBottom:1
    },
    offer_font:{
        fontFamily:'Poppins-Medium',
        // fontSize:13
    }

  })