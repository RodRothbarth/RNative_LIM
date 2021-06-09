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
    <View style={styles.pageNavegacao}>
      <Text style={styles.text1}>Navegação</Text>

       
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AddEvento')}>
          <Icon style={styles.icon} name="plus" size={30}></Icon> 
          <View style={styles.aroundText}>
            <Text style={styles.text}>Adicionar Evento</Text>
            <Text style={styles.small}>Crie um evento</Text>
          </View>
          <Icon style={styles.icon} name="chevron-right" size={15}></Icon> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEventosLocal')}>
          <Icon style={styles.icon} name="paste" size={35}></Icon> 
          <View style={styles.aroundText}>
            <Text style={styles.text}>Meus Eventos</Text>
            <Text style={styles.small}>Eventos que você criou</Text>
          </View>
          <Icon style={styles.icon} name="chevron-right" size={15}></Icon> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaBandas')}>
          <Icon style={styles.icon} name="guitar" size={35}></Icon> 
          <View style={styles.aroundText}>
            <Text style={styles.text}>Bandas</Text>
            <Text style={styles.small}>Bandas disponíveis</Text>
          </View>
          <Icon style={styles.icon} name="chevron-right" size={15}></Icon> 
        </TouchableOpacity>
      </View>
    </View>
    // <View style={styles.container}>

    //   {/* <Text style={styles.text}>Os Melhores Eventos</Text> */}
    //   <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AddEvento')}>
    //     <Text style={styles.text}>Adicionar Evento</Text>
    //   </TouchableOpacity>

    //   {/* <Text style={styles.text}>Os Melhores Eventos</Text> */}
    //   <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaEventosLocal')}>
    //     <Text style={styles.text}>Meus Eventos</Text>
    //   </TouchableOpacity>

    //   {/* <Text style={styles.text}>Os Melhores Artistas</Text> */}
    //   <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ListaBandas')}>
    //     <Text style={styles.text}>Bandas</Text>
    //   </TouchableOpacity>
      
    // </View>
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