import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import Perfil from '../components/PerfilBanda';

const BandaStack = createStackNavigator();

const BandaRoutes = () => {
    return(
    <BandaStack.Navigator>
        <BandaStack.Screen name='Inicio' component={Perfil}/>
    </BandaStack.Navigator>
    )
}

export default BandaRoutes;
