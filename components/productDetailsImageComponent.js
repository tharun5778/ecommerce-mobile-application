import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,Text
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
// import {  } from "../assets/";


class ProductDetailsImageComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../assets/iphone.jpg'),
            require('../assets/shoe1.jpg'),
            require('../assets/shoe3.jpg'),
            require('../assets/shoe4.jpg'),
          ]
        };
      }
    
  render(){
    return(
        <View>
            {(this.props.selectColour == null) && (
                <View>
                    <SliderBox
                        images={this.state.images}
                        sliderBoxHeight={300}
                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        disableOnPress={true}
                        inactiveDotColor="#90A4AE"
                        dotStyle={{
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                            marginHorizontal: 10,
                            padding: 0,
                            margin: 0
                        }}
                        autoplay
                        circleLoop
                    />
                </View>
            )}
            {(this.props.selectColour != null) && (
                // <View>
                //     {this.props.data.map((i)=>{
                //         if(i.color == this.props.selectColour){
                //             return(
                //                 <View>
                //                     {/* <Text>{ i.image}</Text> */}
                //                     {/* <Image source={i.image} style={{width:250, height:250}}/> */}
                //                     {/* <Image source={require('../assets/iphone.jpg')} style={{width:250, height:250}}/> */}

                //                 </View>
                //             )
                //         }
                //     })}
                // </View>
                <View>
                    {this.props.data.map((i)=>{
                        if(i.color == this.props.selectColour){
                            return(
                                <Image source={i.image} style={{width:300, height:300}}/>
                            )
                        }
                    })}
                    
                </View>
            )}
            
        </View>
    )
  }
}

export default ProductDetailsImageComponent;

const styles = StyleSheet.create({
})