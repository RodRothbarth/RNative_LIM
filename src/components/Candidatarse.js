import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import api from '../services/axios';

const Candidatarse = ({navigation}) => {
  const [eventos, setEvento] = useState([])
  
  useEffect (()=> {getEventos()}, [])
  
  const getEventos = async () => {
    try{
      const response = await api.get('/eventos');
      console.log(JSON.stringify(response.data));
      setEvento(response.data);
      console.log(eventos[0].idevento)
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  const candidatar = async () => { // Esta função está errada, tem q mandar as informações da banda logada para a pagina Candidatos
    try{
      const response = await api.post('/eventos'); // mudar endpoint
      console.log(JSON.stringify(response.data));
      setEvento(response.data);
      console.log(eventos[0].idevento)
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  return (
    <ImageBackground source={require('../assets/evento.jpg')} style={styles.image}>
      <View style={styles.container}>
        <StatusBar hidden />

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <FlatList
          data={eventos}
          keyExtractor={(item)=> item.idevento}
          renderItem={({item}) => {
            return (

              <View style={styles.container}>
                <Text style={styles.text}>Nome do Evento</Text>
                <TextInput style={styles.inputNomeEvento} editable={false}>{item.nomedoevento}</TextInput>
                <Text></Text>
                <Text style={styles.text}>Data</Text>
                <TextInput style={styles.input} editable={false}>{item.dtevento}</TextInput>
                <Text></Text>
                <Text style={styles.text}>Horário de início</Text>
                <TextInput style={styles.input} editable={false}>{item.hrinicioevento}</TextInput>
                <Text></Text>
                <Text style={styles.text}>Horário de término</Text>
                <TextInput style={styles.input} editable={false}>{item.hrfimevento}</TextInput>
                <Text></Text>
                <Text style={styles.text}>R$ Valor</Text>
                <TextInput style={styles.input} editable={false}>{item.valorevento}</TextInput>

                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>

              </View>
            )
          }}
        />
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={candidatar}>Candidatar-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

  ladoalado:{
    flexDirection: "row"
  },

  header:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },

  image:{
    width: "100%",
    height:"100%"
  },

  input: {
    height: 40,
    width: 150,
    textAlign: 'center',
    color: '#000',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
  },

  inputNomeEvento: {
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#000',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
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
})

export default Candidatarse;