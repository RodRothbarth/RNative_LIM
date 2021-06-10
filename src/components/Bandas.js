import React, {useState} from 'react';
import { useEffect } from 'react';
import api from '../services/axios';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ListaBandas = ({navigation}) => {

  const [banda, setBanda] = useState([]);

  useEffect (()=> {getBandas()}, []);
  
  const getBandas = async () => {
    try {
      const response = await api.get('/bandas'); // trocar end point
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
        keyExtractor={(item)=> item.idestabelecimento}
        showsVerticalScrollIndicator ={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AvaliacaoBanda')}>

              <View style={styles.eventoContainer}>
                <View style={styles.cabecalho}>
                  <Text style={styles.title}>{item.nomebanda}</Text>
                  <Text style={styles.small}> <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />{item.avalbanda}</Text>  
                </View>

                <Text style={styles.small}><Text style={styles.label}>Integrantes:</Text> {item.integrantes}</Text>

                <Text style={styles.small}><Text style={styles.label}>Gênero:</Text> {item.generobanda}</Text>
                  
                <Text style={styles.small}>
                  <Text style={styles.label}>CNPJ:</Text> {item.cpfcnpj}
                </Text>  

                <Text style={styles.small}><Text style={styles.label}>Região:</Text> {item.cidade} - {item.uf}</Text>   

                <Text style={styles.avaliacao}>
                  <Text style={styles.avalie}>Avalie a Banda </Text> <Icon style={styles.icon} name="chevron-right" size={15} color="#fff"></Icon> 
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

export default ListaBandas;