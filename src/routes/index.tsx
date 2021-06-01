import React, {useContext} from 'react';

import AuthContext from '../contexts/auth'
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';
// import AppRoutes from './approutes';

const Routes = () => {
  const {signed} = useContext(AuthContext);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;