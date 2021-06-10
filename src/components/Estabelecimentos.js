import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar, FlatList } from 'react-native';
import api from '../services/axios';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ListaEstabelecimentos = ({navigation}) => {

  const [local, setLocal] = useState([])

  useEffect (()=> {getEventos()}, [])
  
  const getEventos = async () => {
    try {
      const response = await api.get('/estabelecimentos'); // trocar end point
      console.log(JSON.stringify(response.data));
      setLocal(response.data);
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.tituloPagina}>Estabelecimentos</Text>

      <FlatList
        data={local}
        keyExtractor={(item)=> item.idestabelecimento}
        showsVerticalScrollIndicator ={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AvaliacaoLocal')}>

              <View style={styles.eventoContainer}>
                <View style={styles.cabecalho}>
                  <Text style={styles.title}>{item.razsocial}</Text>
                  <Text style={styles.small}> <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />{item.avalestabelecimento}</Text>  
                </View>

                <Text style={styles.small}><Text style={styles.label}>Gênero:</Text> {item.generobar}</Text>        
                  
                <Text style={styles.small}>
                  <Text style={styles.label}>CNPJ:</Text> {item.cnpj}
                </Text>  

                <Text style={styles.small}><Text style={styles.label}>Endereço:</Text> {item.logradouro}, {item.numero} - {item.pontodereferencia} {item.bairro} {item.cidade} - {item.uf}, {item.cep}</Text>   

                <Text style={styles.avaliacao}>
                  <Text style={styles.avalie}>Avalie o estabelecimento </Text> <Icon style={styles.icon} name="chevron-right" size={15} color="#fff"></Icon> 
                </Text>  
              </View>

            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 15,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#2a2a2a',
    height : '100%',
    width : '100%',
  },
  tituloPagina : {
    fontSize : 30,
    color : '#fff',
    marginBottom : 30,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#0ac5a8',
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  small : {
    fontSize: 15,
    marginBottom: 5
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
  avaliacao : {
    textAlign: 'right',
    marginTop: 10
  },
  avalie : {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 18
  }
});
export default ListaEstabelecimentos;