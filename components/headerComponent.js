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
// import Icon from 'react-native-vector-icons/AntDesign';


class HeaderComponent extends Component{

  render(){
    return(
        <View style={this.props.style}>
            <TouchableOpacity style={styles.back} onPress={()=>this.props.goback()}>
                <Text>
                    {this.props.back}
                </Text>
            </TouchableOpacity>
            <View style={styles.logo}>
                <Text>{this.props.center}</Text>
            </View>
            <TouchableOpacity style={styles.item}>
                <View style={styles.itemCenter}>
                    {/* <Icon name={this.props.right} size={25} color={this.props.rightselect == true? "red": "#000000"} /> */}
                    {this.props.right}
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
        // backgroundColor:'#ffffff'
    },
    back: {
        flex:1,
        justifyContent:'center',
        marginLeft:15
    },
    logo: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:2
    },
    item: {
        flex:1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginLeft:15
    }
  })