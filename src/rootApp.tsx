import React from 'react';
import ALlProducts from './components/AllProducts';
import OneProduct from './components/oneProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="allProducts" component={ALlProducts} />
        <Stack.Screen name="oneProduct" component={OneProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
