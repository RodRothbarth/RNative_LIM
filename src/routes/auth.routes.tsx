import React from 'react';
import Login from '../components/Login';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;