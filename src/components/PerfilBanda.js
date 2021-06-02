import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground
} from 'react-native';

const PerfilBanda = ({navigation}) => {
  return(
    <ImageBackground source={require('../assets/stage-lights.jpg')} style={styles.image}>
    <View style={styles.container}>

      <Text style={styles.text}>Os Melhores Eventos</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEventosBanda')}>
        <Text style={styles.text}>Eventos</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Os Melhores Lugares</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEstabelecimentos')}>
        <Text style={styles.text}>Locais</Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
text:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 20
},

text1:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 25,
  textAlign: 'center'
},

image:{
  width:'100%',
  height:'100%'
},

  button: {
    width: '70%',
    marginVertical: 20,
    height: 50,
    backgroundColor: '#00cc9980',
    padding: 5,
    borderRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PerfilBanda;