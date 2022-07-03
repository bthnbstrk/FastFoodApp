import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Homepage from './pages/Homepage';
import Products from './pages/Products/List';
import ProductDetail from './pages/Products/Detail';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Homepage}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: '#e3d5a0'},
            headerTitleStyle: {color: 'black', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={Products}
          options={{
            title: 'Products',
            headerTintColor: 'black',
            headerStyle: {backgroundColor: '#e3d5a0'},
            headerTitleStyle: {color: 'black', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={ProductDetail}
          options={{
            title: 'Product Detail',
            headerTintColor: 'black',
            headerStyle: {backgroundColor: '#e3d5a0'},
            headerTitleStyle: {color: 'black', fontSize: 20},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
