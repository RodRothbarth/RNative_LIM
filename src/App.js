import React, {useState} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import AuthContext from '/contexts/auth';

const Page = createStackNavigator()

import Login from './components/Login'
import PaginaInicial from './components/PaginaInicial'
import Perfil from './components/Perfil'
import AddEvento from './components/AddEvento'
import VerEvento from './components/VerEvento'


const App = () => {
  const [signed, setSigned] = useState(false);
  return (
    
    <NavigationContainer>
      <AuthProvider >
        <Routes>
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
        </Routes>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;
 