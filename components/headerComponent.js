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


class HeaderComponent extends Component{

  render(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.back}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={styles.logo}>
                <Text>Logo</Text>
            </View>
            <TouchableOpacity style={styles.item}>
                <View style={styles.itemCenter}>
                    <Text>Item</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }
}

export default HeaderComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#ffffff'
    },
    back: {
        flex:1,
        justifyContent:'center',
        marginLeft:15
    },
    logo: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item: {
        flex:1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginLeft:15
    }
  })