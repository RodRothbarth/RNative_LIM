import React, { useState } from 'react';
import api from '../services/axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

const AddEvento = ({navigation}) => {
  const [nomeEvento, setNomeEvento] = useState("");
  const [valorEvento, setValorEvento] = useState("");
  const [dataEvento, setDataEvento] = useState(false);
  const [hrInicioEvento, setHrInicioEvento] = useState(false);
  const [hrFimEvento, setHrFimEvento] = useState(false);

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
      <View style={styles.container}>
        <Text style={styles.header}>Crie seu Evento</Text>
        <TextInput placeholder="Nome do Evento" style={styles.input} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />

        <Button title="data do evento" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={dataEvento}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />

        <Button title="hora de início" onPress={showTimeInicioPicker} />
        <DateTimePickerModal
          isVisible={hrInicioEvento}
          mode="time"
          onConfirm={handleTimeInicioConfirm}
          onCancel={hideTimeInicioPicker}
        />

        <Button title="hora de término" onPress={showTimeFimPicker} />
        <DateTimePickerModal
          isVisible={hrFimEvento}
          mode="time"
          onConfirm={handleTimeFimConfirm}
          onCancel={hideTimeFimPicker}
        />

        <TextInput placeholder="Valor do Evento" type="number" style={styles.input} value={valorEvento} onChangeText={item => {setValorEvento(item)}} />

        <View>
          <TouchableOpacity style={styles.button} onPress={createEvento}>
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
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff'
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

export default AddEvento;