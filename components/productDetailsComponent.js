import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


class ProductDetailsComponent extends Component{

  render(){
    return(
        <View style={styles.details_design}>
            <Text style={styles.details_name}>{this.props.name}</Text>
            <Text style={styles.details_description}>{this.props.description}</Text>
            <View style={styles.details_sizes}>
                <View style={styles.details_sizes_text}>
                    <Text style={styles.details_sizetext_font}>size: </Text>
                </View>
                <View style={styles.details_sizes_text}>
                    <View style={styles.details_sizes_background}>
                        <Text style={styles.details_sizes_font}>US 16</Text>
                    </View>
                </View>
                <View style={styles.details_sizes_text}>
                    <View style={styles.details_sizes_background}>
                        <Text style={styles.details_sizes_font}>US 16</Text>
                    </View>
                </View>
                <View style={styles.details_sizes_text}>
                    <View style={styles.details_sizes_background}>
                        <Text style={styles.details_sizes_font}>US 16</Text>
                    </View>
                </View>
                <View style={styles.details_sizes_text}>
                    <View style={styles.details_sizes_background}>
                        <Text style={styles.details_sizes_font}>US 16</Text>
                    </View>
                </View>

            </View>
            <View style={styles.details_color}>
                <View style={styles.details_color_text}>
                    <Text style={styles.details_sizetext_font}>Available Color:</Text>
                </View>
                <View style={styles.details_color_flex}>
                    <View style={styles.color_items}>
                        <View style={styles.color_items_design}>
                            
                        </View>
                    </View>
                    <View style={styles.color_items}>
                        <View style={styles.color_items_design}>
                            
                        </View>
                    </View>
                    <View style={styles.color_items}>
                        <View style={styles.color_items_design}>
                            
                        </View>
                    </View>
                    <View style={styles.color_items}>
                        <View style={styles.color_items_design}>
                            
                        </View>
                    </View>
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
        marginTop:15
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
        width:45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#77d2d9',
        flex: 1
    },
    details_sizes_font: {
        fontFamily:'Poppins-Medium',
        fontSize:18,
        color:'#000000'
    },
    details_color:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:10
    },
    details_color_text: {
        flex: 2
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
        height:18,
        width:18,
        backgroundColor:'red',
        borderRadius:50
    }
})