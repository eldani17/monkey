import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '@screens/splash';
import Home from '@screens/home';
import Login from '@app/screens/login';

const Stack = createNativeStackNavigator();

const MonkeyNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ title: 'Inicio' }}
        component={Home}
      />
      <Stack.Screen
        name="Login"
        options={{ title: 'Iniciar Sesión' }}
        component={Login}
      />
      <Stack.Screen
        name="Splash"
        options={{ title: 'Espera' }}
        component={Splash}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MonkeyNavigator;
