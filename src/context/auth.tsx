import React , { createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage  from '@react-native-community/async-storage'
import api from '../services/axios'

interface Perfil {
    id:number;
    perfil:string
}

interface AuthContextData{
    perfil: Perfil;
    LogIn(): Promise<void>;
    LogOut(): void;
    loading:boolean
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({children}) => {
    const[perfil, setPerfil] =useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData(){
        const loggedPerfil =  await AsyncStorage.getItem('@RNAuth:perfil')
        const loggedToken  = await AsyncStorage.getItem('@RNAuth:token')

        if (loggedPerfil && loggedToken){
            api.defaults.headers['Authorization'] = `Bearer ${loggedToken}`;
            setPerfil(JSON.parse(loggedPerfil))
            setLoading(false)
        }
        }
        loadData()

        }, []);
    
    async function LogIn(){
       const response = await api.get('/usuario');
        console.log(response)

       const { perfil } = response;
       setPerfil(response.perfil)

       api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
       
       await AsyncStorage.setItem('@RNAuth:perfil', JSON.stringify(response.perfil))
       await AsyncStorage.setItem('@RNAuth:token', response.token)
    }

    function LogOut(){
        AsyncStorage.clear().then(() => {
        setPerfil({})
    })
}
       
    return(
        <AuthContext.Provider value={{perfil, LogIn, loading, LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}