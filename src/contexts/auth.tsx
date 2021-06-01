import React, {createContext, useState} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function Login() {
    const response = await auth.Login();

    setUser(response.user)
  }
  return (
    <AuthContext.provider value={{signed: !!user, user, Login}}>
      {children}
    </AuthContext.provider>
  );
};

export default AuthContext;