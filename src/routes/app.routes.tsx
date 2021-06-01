import React from 'react';
import PaginaInicial from '../components/PaginaInicial';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="PaginaInicial" component={PaginaInicial} />
  </AppStack.Navigator>
);

export default AppRoutes;