import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar, FlatList } from 'react-native';
import api from '../services/axios';


const ListaEstabelecimentos = () => {

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
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AvaliacaoLocal')}>

              <View style={styles.eventoContainer}>
  
                <Text>{item.razaosocial}</Text>                      
                <Text>{item.cnpj}</Text>                                                               
                <Text>{item.logradouro}</Text>                                           
                <Text>{item.numero}</Text>                                          
                <Text>{item.bairro}</Text>                                            
                <Text>{item.cep}</Text>                                           
                <Text>{item.cidade}</Text>                                          
                <Text>{item.pontodereferencia}</Text>                                            
                <Text>{item.numero}</Text>                                            
                <Text>{item.generobar}</Text>                                                 
                <Text>{item.avalestabelecimento}</Text>
                <Text>{item.uf}</Text>
                  
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
    width: 350,
    marginVertical: 20,
    height: 50,
    backgroundColor: '#0ac5a8',
    padding: 5,
    borderRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default ListaEstabelecimentos;