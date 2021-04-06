import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Rating} from 'react-native-ratings';


class ProductDetailsComponent extends Component{
  render(){
    //   console.log(this.props.rating)
    return(
        <View style={styles.details_design}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:3,flexDirection:'row'}}>
                    <Text style={styles.details_name}>{this.props.name}</Text>
                </View>
                
                <View style={{flex: 1,flexDirection:'row-reverse', backgroundColor:'#e3e3e3',marginLeft:20, alignItems:'center'}}>
                        <View style={{flexDirection:'row' }}>
                            <Icon name="ios-star-sharp" size={20} color="#f1c40f" />
                            <Text style={{fontFamily:'Poppins-Medium', fontSize:13, color:'#525252'}}> ({this.props.rating})</Text>
                        </View>
                        
                </View>
            </View>
            
            <Text style={styles.details_description}>{this.props.description}</Text>
            <View style={styles.details_sizes}>
                <View style={styles.detailsSizeText}>
                    <Text style={styles.details_sizetext_font}>Size:</Text>
                </View>
                <View style={styles.detailsColorFlex}>
                    {this.props.size.map((i)=>{
                        return(
                            <TouchableOpacity style={styles.color_items} onPress={()=>this.props.selectSize(i.size)}>
                                    {(i.isSelected == true) && (
                                        <View style={styles.details_sizes_background}>
                                            <Text style={styles.details_sizes_font}>Us {i.size}</Text>
                                        </View>
                                    )}
                                    {(i.isSelected == false) && (
                                        <View style={styles.details_sizes_background1}>
                                            <Text style={styles.details_sizes_font}>Us {i.size}</Text>
                                        </View>
                                    )}
                            </TouchableOpacity>
                        )
                    })}
                </View>

            </View>
            <View style={styles.details_color}>
                <View style={styles.details_color_text}>
                    <Text style={styles.details_sizetext_font}>Available Color:</Text>
                </View>
                <View style={styles.details_color_flex}>
                    {this.props.colour.map((i)=>{
                        return(
                            <TouchableOpacity style={styles.color_items} onPress={()=>this.props.selectColour(i.colour)}>
                                {(i.isSelected == false) && (
                                    <View>
                                        <Icon name="ellipse-sharp" size={20} color={i.colour} />
                                    </View>    
                                )}
                                {(i.isSelected == true) && (
                                    <View style={{backgroundColor:'#77d2d9', paddingTop:5,paddingBottom:5, justifyContent:'center', alignItems:'center', borderRadius:13, paddingLeft:13,paddingRight:13}}>
                                        <Icon name="ellipse-sharp" size={20} color={i.colour} />
                                    </View>    
                                )}
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </View>
    )
  }
}

export default ProductDetailsComponent;

const styles = StyleSheet.create({
    details_design:{
        marginLeft:25,
        marginTop:15,
        marginRight: 10
    },
    details_name:{
        fontFamily:'Poppins-Medium',
        fontSize:25,
        color:'#0d51e0'
    },
    details_description:{
        fontFamily:'Poppins-Medium',
        fontSize:15,
        color:'#0d51e0'
    },
      details_sizes:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:10
    },
    details_sizes_text: {
        flex:1,
        // width: 20,
        // height: 20,
        // backgroundColor: 'red'
        // // alignItems:'center'
    },
    details_sizetext_font:{
        fontFamily:'Poppins-Medium',
        fontSize:18,
        color:'#666666'
    },
    details_sizes_background:{
        // height:15,
        // width:45,
        // padding:8,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight:15,
        paddingLeft:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#77d2d9',
        flex: 1
    },
    details_sizes_background1:{
        // height:15,
        width:45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#e3e3e3',
        flex: 1
    },
    details_sizes_font: {
        fontFamily:'Poppins-Medium',
        fontSize:13,
        color:'#000000'
    },
    details_color:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:10
    },
    details_color_text: {
        flex: 2,
        justifyContent:'center'
    },
    details_color_flex: {
        flex: 3,
        flexDirection: 'row'
    },
    color_items:{
        flex:1,
        // marginTop:3,
        justifyContent:'center',
        alignItems: 'center'
    },
    color_items_design:{
        height:13,
        width:13,
        backgroundColor:'red',
        borderRadius:50
    },
    detailsColorFlex:{
        flex:1,
        flexDirection:'column'
    },
    detailsSizeText:{
        flex: 1
    },
    detailsColorFlex:{
        flex: 5,
        flexDirection: 'row'
    }
})