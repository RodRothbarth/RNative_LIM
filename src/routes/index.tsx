import React from 'react';

import {useAuth} from '../context/auth'

import BandaRoutes from './banda.routes';
import LocalRoutes from './local.routes'
import LoginRoutes from './SignIn.routes';


const Routes = () => {
    const { perfil } = useAuth(); 

    if( perfil.perfil == 'banda'){
        return ( <BandaRoutes />)
    }else if(perfil.perfil == 'estabalecimento'){
        return (<LocalRoutes />)
    }else{
        return (<LoginRoutes/>)
    }    
        
}

export default Routes;