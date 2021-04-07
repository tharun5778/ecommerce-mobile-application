import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


class LogoComponent extends Component{

  render(){
    return(
        <View style={styles.container}>
            <Text style={styles.xStyle}>X</Text>
            <Text style={styles.eStyle}>E</Text>
        </View>
    )
  }
}

export default LogoComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    xStyle:{
        fontFamily:'Poppins-BoldItalic',
        fontSize:20,
        color:'#334a96'
    },
    eStyle:{
        fontFamily:'Poppins-BoldItalic',
        fontSize:20,
        color:'#52afc4'
    }
})