import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from "./navigations/mainTab";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import store from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App=() => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainTab}  options={{headerShown: false}}/>
          <Stack.Screen name="Details" component={ProductDetailsScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
