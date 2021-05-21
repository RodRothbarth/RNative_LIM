import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';


const PaginaInicial = ({navigation}) => {
  return (
      <ImageBackground source={require('../assets/background-3.jpg')} style={styles.image}>
        <StatusBar hidden />
        
        <View style={styles.logoView}>
          <Image style={styles.logo} source={require('../assets/logo-let-it-music-white.png')} />
        </View>


        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.buttonCadastro} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textButton}>CADASTRE-SE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    padding: 20,
  },
  logoView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
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
  buttonCadastro: {
    backgroundColor: '#0ac5a8',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
  },
  buttonLogin: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#fff',
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  buttonsView: {

  },
});

export default PaginaInicial;
