import React, {useState} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Routes from './routes';
// import AuthContext from '/contexts/auth';

const Page = createStackNavigator()

import AddEvento from './components/AddEvento';
import AvaliacaoBanda from './components/AvaliacaoBanda';
import AvaliacaoLocal from './components/AvaliacaoLocal';
import ListaBandas from './components/Bandas';
import Candidatarse from './components/Candidatarse';
import VerCandidatos from './components/Candidatos';
import ListaEstabelecimentos from './components/Estabelecimentos';
import ListaEventos from './components/ListaEventoBanda';
import ListaEventosLocal from './components/ListaEventoLocal';
import Login from './components/Login';
import PaginaInicial from './components/PaginaInicial';
import PerfilBanda from './components/PerfilBanda';
import PerfilLocal from './components/PerfilLocal';

const App = () => {
  // const [signed, setSigned] = useState(false);
  return (
    
    <NavigationContainer>
      {/* <AuthProvider >
        <Routes> */}
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
            name='PerfilBanda' 
            component={PerfilBanda}
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='AvaliacaoBanda' 
            component={AvaliacaoBanda}
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='AvaliacaoLocal' 
            component={AvaliacaoLocal}
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='PerfilLocal' 
            component={PerfilLocal}
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='AddEvento' 
            component={AddEvento} 
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='Candidatarse' 
            component={Candidatarse} 
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='Candidatos' 
            component={VerCandidatos} 
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='ListaEventos' 
            component={ListaEventos} 
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='ListaEstabelecimentos' 
            component={ListaEstabelecimentos} 
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='ListaBandas' 
            component={ListaBandas}
            options={
            { headerShown:false
            }}
          />
          <Page.Screen 
            name='ListaEventosLocal' 
            component={ListaEventosLocal} 
            options={
            { headerShown:false
            }}
          />
        </Page.Navigator>
        {/* </Routes>
      </AuthProvider> */}
    </NavigationContainer>
  )
}

export default App;
 