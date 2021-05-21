import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

const Perfil = ({navigation}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Evento')}>
        <Text>Eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Artistas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Locais</Text>
      </TouchableOpacity>        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Perfil;