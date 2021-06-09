import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PerfilBanda = ({navigation}) => {
  return(
    // <ImageBackground source={require('../assets/stage-lights.jpg')} style={styles.image}>
    <View style={styles.pageNavegacao}>
      <Text style={styles.text1}>Navegação</Text>

       
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEstabelecimentos')}>
          <Icon style={styles.icon} name="home" size={30}></Icon> 
          <View style={styles.aroundText}>
            <Text style={styles.text}>Estabelecimentos</Text>
            <Text style={styles.small}>Lugares para eventos</Text>
          </View>
          <Icon style={styles.icon} name="chevron-right" size={15}></Icon> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEventosBanda')}>
          <Icon style={styles.icon} name="calendar-check" size={35}></Icon> 
          <View style={styles.aroundText}>
            <Text style={styles.text}>Eventos</Text>
            <Text style={styles.small}>Eventos disponíveis</Text>
          </View>
          <Icon style={styles.icon} name="chevron-right" size={15}></Icon> 
        </TouchableOpacity>
      </View>
    </View>
    // </ImageBackground>
  )
}
const styles = StyleSheet.create({
  pageNavegacao: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2a2a2a'
  },
  container: {
    alignItems: 'center',
    width: '100%'
  },
  text1:{
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 30,
    fontSize: 25,
    textAlign: 'center'
  },
  image:{
    width:'100%',
    height:'100%'
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20
  },
  icon: {
    marginRight: 30,
    marginLeft: 20,
    color: '#fff',
  },
  aroundText : {
    width: 200
  },
  text:{
    color: '#fff',
    fontSize: 20,
  },
  small:{
    color: '#fff',
  },
})

export default PerfilBanda;