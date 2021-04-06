import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from "../screens/productsScreen";
import CartScreen from "../screens/cartScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function MainTab() {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'ios-home'
              } else if (route.name === 'cart') {
                iconName = 'cart';
              }

              return <Ionicons name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#2b3e9e',
            inactiveTintColor: '#bfbfbf',
            showLabel:false
          }}
        >
            <Tab.Screen name="Home" component={ProductsScreen} />
            <Tab.Screen name="cart" component={CartScreen} />
         </Tab.Navigator>
  );
}


export default MainTab;
