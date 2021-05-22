import React, { useState } from 'react';
import api from '../services/axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground
} from 'react-native';

const AddEvento = ({navigation}) => {
  const [nomeEvento, setNomeEvento] = useState("");
  const [valorEvento, setValorEvento] = useState("");
  const [dataEvento, setDataEvento] = useState(false);
  const [hrInicioEvento, setHrInicioEvento] = useState(false);
  const [hrFimEvento, setHrFimEvento] = useState(false);
  // const [hora, setHora] = useState("")

  // Data do Evento

  const showDatePicker = () => {
    setDataEvento(true);
  };

  const hideDatePicker = () => {
    setDataEvento(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // Hora de Início do Evento

  const showTimeInicioPicker = () => {
    setHrInicioEvento(true);
  };

  const hideTimeInicioPicker = () => {
    setHrInicioEvento(false);
  };

  const handleTimeInicioConfirm = (timeinicio) => {
    console.warn("A date has been picked: ", timeinicio);
    // setHora(timeinicio)
    // console.log(hora)
    hideTimePicker();
  };

    // Hora Final do Evento

  const showTimeFimPicker = () => {
    setHrFimEvento(true);
  };

  const hideTimeFimPicker = () => {
    setHrFimEvento(false);
  };

  const handleTimeFimConfirm = (timefim) => {
    console.warn("A date has been picked: ", timefim);
    hideTimeFimPicker();
  };


  const createEvento = async () => {

    if (nomeEvento && dataEvento && hrInicioEvento && hrFimEvento && valorEvento){
      try{
        const response = await api.post('/Evento', {"nome": nomeEvento, "dtevento": dataEvento, "hrinicio": hrInicioEvento, "hrfim": hrFimEvento, "valor": valorEvento});
        console.log(JSON.stringify(response.data));
        // navigation.navigate('Home');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }

  return(
    <>
    <ImageBackground source={require('../assets/evento.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.header}>Crie seu Evento</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        
        <TextInput placeholder="Nome do Evento" style={styles.input} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />
        <Text style={styles.text}></Text>
        <Button title="data do evento" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={dataEvento}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
<Text style={styles.text}></Text>
        <Button title="hora de início" onPress={showTimeInicioPicker} />
        <DateTimePickerModal
          isVisible={hrInicioEvento}
          mode="time"
          onConfirm={handleTimeInicioConfirm}
          onCancel={hideTimeInicioPicker}
        />
<Text></Text>
        <Button title="hora de término" onPress={showTimeFimPicker} />
        <DateTimePickerModal
          isVisible={hrFimEvento}
          mode="time"
          onConfirm={handleTimeFimConfirm}
          onCancel={hideTimeFimPicker}
        />
<Text ></Text>
        <TextInput placeholder="Valor do Evento" type="number" style={styles.input} value={valorEvento} onChangeText={item => {setValorEvento(item)}} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={createEvento}>
            <Text style={styles.buttonText}>Cadastrar Evento</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  button: {
    width: 350,
    marginVertical: 20,
    height: 50,
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default AddEvento;