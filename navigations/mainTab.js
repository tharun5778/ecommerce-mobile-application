import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from "../screens/productsScreen";
import CartScreen from "../screens/cartScreen";

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ProductsScreen} />
            <Tab.Screen name="cart" component={CartScreen} />
         </Tab.Navigator>
  );
}

export default MainTab;
