import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native';

import api from '../services/axios';

const AddEvento = ({navigation}) => {

  const [nomeEvento, setNomeEvento] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [hrInicioEvento, setHrInicioEvento] = useState("");
  const [hrFimEvento, setHrFimEvento] = useState("");
  const [valorEvento, setValorEvento] = useState("");

  const createEvento = async () => {
    if (nomeBanda && integrantesBanda && generoBanda && cidadeBanda && cpfCnpjBanda){
      try{
        const response = await api.post('/Evento', {"nome": nomeEvento, "dtevento": dataEvento, "hrinicio": hrInicioEvento, "hrfim": hrFimEvento, "valor": valorEvento});
        console.log(JSON.stringify(response.data));
        navigation.navigate('Home');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Let It Music</Text>
        <TextInput placeholder="Nome do Evento" style={styles.input} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />
        <DatePicker placeholder="Data do Evento" androidVariant="nativeAndroid" mode="date" style={styles.input} date={dataEvento} onDateChange={setDataEvento} />
        <TextInput placeholder="Horário de Início" type="number" style={styles.input} value={hrInicioEvento} onChangeText={item => {setHrInicioEvento(item)}} />
        <TextInput placeholder="Horário de Término" type="number" style={styles.input} value={hrFimEvento} onChangeText={item => {setHrFimEvento(item)}} />
        <TextInput placeholder="Valor do Evento" type="number" style={styles.input} value={valorEvento} onChangeText={item => {setValorEvento(item)}} />

        <View>
          <TouchableOpacity style={styles.button} onPress={createBanda}>
            <Text style={styles.buttonText}>Cadastrar Evento</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddEvento;