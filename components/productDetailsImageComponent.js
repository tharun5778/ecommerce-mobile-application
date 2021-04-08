import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Image,Text,
  Animated
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
// import {  } from "../assets/";


class ImageLoader extends Component {
    state = {
        opacity : new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    render(){
        return(
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        opacity:this.state.opacity,
                        transform:[
                            {
                                scale:this.state.opacity.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [0.85,1],
                                })
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }
}

const ProductDetailsImageComponent =(props) =>{

        const images= [
            require('../assets/iphone.jpg'),
            require('../assets/shoe1.jpg'),
            require('../assets/shoe3.jpg'),
            require('../assets/shoe4.jpg'),
          ];

    

    return(
        <View>
            {(props.selectColour == null) && (
                <View>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={300}
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
            {(props.selectColour != null) && (
                <View>
                    {props.data.map((i)=>{
                        if(i.color == props.selectColour){
                            return(
                                <ImageLoader source={i.image} style={{width:300, height:300}}/>
                            )
                        }
                    })}
                    
                </View>
            )}
            
        </View>
    )

}

export default ProductDetailsImageComponent;

// const styles = StyleSheet.create({
// })