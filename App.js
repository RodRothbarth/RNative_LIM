import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Page = createStackNavigator()

import Login from './src/components/Login'
import PaginaInicial from './src/components/PaginaInicial'
import Perfil from './src/components/Perfil'
import AddEvento from './src/components/AddEvento'
import VerEvento from './src/components/VerEvento'


const App = () => {
  return (
    <NavigationContainer>
      <Page.Navigator>
        <Page.Screen 
          name='Pagina Inicial' 
          component={PaginaInicial} 
          options={
           { headerShown:false
          }}
        />
        <Page.Screen 
          name='Login' 
          component={Login} 
          options={
           { headerShown:false
          }}
        />
         <Page.Screen 
          name='Perfil' 
          component={Perfil} 
          options={
           { headerShown:false
          }}
        />
         <Page.Screen 
          name='Evento' 
          component={AddEvento} 
          options={
           { headerShown:false
          }}
        />
        <Page.Screen 
          name='VerEvento' 
          component={VerEvento} 
          options={
           { headerShown:false
          }}
        />
      </Page.Navigator>
    </NavigationContainer>
  )
}

export default App;
 