import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from "../screens/cartScreen";

const Stack = createStackNavigator();

function CartStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>

  );
}

export default CartStack;
