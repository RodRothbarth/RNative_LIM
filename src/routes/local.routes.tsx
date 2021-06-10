import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import Perfil from '../components/PerfilBanda'

const LocalStack = createStackNavigator();

const LocalRoutes = () => {
    return (
    <LocalStack.Navigator>
        <LocalStack.Screen name='Inicio' component={Perfil}/>
    </LocalStack.Navigator>
    )
}

export default LocalRoutes;