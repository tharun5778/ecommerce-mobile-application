import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreen from "../screens/productsScreen";

const Stack = createStackNavigator();

function ProductsStack() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ProductsScreen} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
      </Stack.Navigator>

  );
}

export default ProductsStack;
