import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AuthContext from '../contexts/auth';

const Login = ({navigation}) => {
  // const {signed, Login} = useContext(AuthContext);

  // console.log(signed);
  // console.log(user);


  // function handleLogin() {
  //   signIn();
  // }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

  const cadastro = () => {
    alert(senha);
    alert(email);
    alert(nome);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={styles.img} source={require('../assets/logo-let-it-music-white.png')} />

      {/* <Text style={styles.title}>Cadastro</Text> */}

      <TextInput placeholder="Nome" placeholderTextColor="#fff" style={styles.input} onChangeText={text=>setNome(text)}/>
      {/* <TextInput placeholder="Seu Email" placeholderTextColor="#fff" style={styles.input} onChangeText={text=>setEmail(text)}/> */}
      <TextInput secureTextEntry={true} placeholder="Senha" placeholderTextColor="#fff" style={styles.input} onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('PerfilBanda')}>
        <Text style={styles.textButton}>LOGIN BANDA</Text>
      </TouchableOpacity>

      <Text></Text>
      {/* Criado somente para acessar as páginas como Dono de Local */}
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('PerfilLocal')}>
        <Text style={styles.textButton}>LOGIN ESTABELECIMENTO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginBottom: 30, 
    color: '#fff'
  },
  button: {
    backgroundColor: '#0ac5a8',
    justifyContent: 'center',
    width: '100%',
    height: 40,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});
export default Login;