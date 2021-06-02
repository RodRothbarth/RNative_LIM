import React, {useState} from 'react';
import { useEffect } from 'react';
import api from '../services/axios';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, FlatList } from 'react-native';

const ListaBandas = ({navigation}) => {

  const [banda, setBanda] = useState([]);

  useEffect (()=> {getBandas()}, []);
  
  const getBandas = async () => {
    try {
      const response = await api.get('/banda'); // trocar end point
    console.log(JSON.stringify(response.data));
    setBanda(response.data);
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.tituloPagina}>Bandas</Text>

      <FlatList
        data={banda}
        keyExtractor={(item)=> item.idbanda}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AvaliacaoBanda')}>

              <View style={styles.eventoContainer}>

                <Text>{item.nomebanda}</Text>
                <Text>{item.cpfcnpj}</Text>
                <Text>{item.integrantes}</Text>
                <Text>{item.generobanda}</Text>
                <Text>{item.avalbanda}</Text>
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
})

export default ListaBandas;