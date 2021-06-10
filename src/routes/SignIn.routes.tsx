import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import LogIn from '../components/Login'

const LogInStack = createStackNavigator();

const LogInRoutes = () => {
   return (
    <LogInStack.Navigator>
        <LogInStack.Screen name='LogIn' component={LogIn}/>
    </LogInStack.Navigator>)
}

export default LogInRoutes;