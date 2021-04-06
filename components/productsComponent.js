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
import { AirbnbRating, Rating} from 'react-native-ratings';




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
                                            <Icon name={"heart-circle"} size={25} color={this.state.isLiked == true? "red": "#000000" } />
                                        </Text>
                                    {/* </TouchableOpacity> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={require('../assets/iphone.jpg')} style={{width:100, height:100}}/>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.details_name}>{this.props.product.name}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontFamily:'Poppins-Medium', color:'#005ce6', fontSize:15, marginTop: 3}}>$ </Text>
                            <Text style={styles.details_price}>{this.props.product.price}</Text>
                        </View>
                        {/* <Text style={styles.details_rating}>{this.props.product.Rating}</Text> */}
                        <View style={{flexDirection:'row'}}>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={15}
                                onFinishRating={this.ratingCompleted}
                                readonly={true}
                                startingValue={this.props.product.Rating}
                                // style={{}}
                                // starStyle: { {
                                //     margin: 3 
                                //  } }
                                
                            />
                            <Text style={{fontFamily:'Poppins-Medium', fontSize: 12}}> (4.7)</Text>
                        </View>

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
        height: 280,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    offer_design:{
        // width: 45,
        // height:20,
        // paddingBottom:2,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
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
        flex:10,
        // backgroundColor:'red'
        alignItems: 'center',
        justifyContent:'center'

    },
    details:{
        flex:9,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    details_name: {
        fontSize: 18,
        // marginTop: 3,
        fontFamily:'Poppins-Medium',
        // marginBottom: 5,
        color: '#005ce6'
        
    },
    details_price:{
        fontSize: 23,
        fontFamily:'Poppins-Medium',
        color: '#005ce6'
    },
    details_rating:{
        fontFamily:'Poppins-Medium',
        fontSize:15,
        marginBottom:1,
        color: '#005ce6'
    },
    offer_font:{
        fontFamily:'Poppins-Medium',
        // fontSize:13
    }

  })