import React, {createContext, useState} from 'react';
// import * as auth from '../routes/auth.routes';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user)
  }
  return (
    <AuthContext.provider value={{signed: !!user, user, signIn: signIn}}>
      {children}
    </AuthContext.provider>
  );
};

export default AuthContext;