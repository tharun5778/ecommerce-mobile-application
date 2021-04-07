import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


class MenuComponent extends Component{

  render(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.circle1}>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.circle1}>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottom}>
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.circle1}>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.circle1}>
                    </View>
                </View>
            </View>
        </View>
    )
  }
}

export default MenuComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'column',
        width:25,
        height:25,
        // backgroundColor:'red'
    },
    top:{
        flex:1,
        flexDirection:'row',
        // backgroundColor:'#52afc4',
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        flex:1,
        flexDirection:'row',
        // backgroundColor:'#176117',
        justifyContent:'center',
        alignItems:'center'
    },
    circle1:{
        height:5,
        width:5,
        backgroundColor:'#000000',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        
    },
})