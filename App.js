import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from "./navigations/mainTab";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";


const Stack = createStackNavigator();

const App=() => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainTab} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
