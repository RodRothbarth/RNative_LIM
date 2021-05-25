import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Example from './input'
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

  const [mostrarDataEvento, setMostrarDataEvento] = useState(false);
  const [mostrarHrInicioEvento, setMostrarHrInicioEvento] = useState(false);
  const [mostrarHoraFimEvento, setMostrarHoraFimEvento] = useState(false);

  const [dataEvento, setDataEvento] = useState(null);
  const [horaInicioEvento, setHoraInicioEvento] = useState(null);
  const [horaFimEvento, setHoraFimEvento] = useState(null);


  // Data do Evento

  const showDatePicker = () => {
    setMostrarDataEvento(true);
  };

  const hideDatePicker = () => {
    setMostrarDataEvento(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
    setDataEvento(parseDate(date));
  };
  const parseDate = (date) => {
    return `${date.getDate().toString().padStart(2,0)}/${date.getMonth().toString().padStart(2,0)}/${date.getFullYear()}`;
  }

  // Hora de Início do Evento

  const showTimeInicioPicker = () => {
    setMostrarHrInicioEvento(true);
  };

  const hideTimeInicioPicker = () => {
    setMostrarHrInicioEvento(false);
  };

  const handleTimeInicioConfirm = (timeinicio) => {
    console.warn("Hórário de início: ", timeinicio);
    hideTimeInicioPicker();
    setHoraInicioEvento(parseHoraInicio(timeinicio));
  };
  const parseHoraInicio = (timeinicio) => {
    return `${timeinicio.getHours().toString().padStart(2,0)}:${timeinicio.getMinutes().toString().padStart(2,0)}`;
  }

    // Hora Final do Evento

  const showTimeFimPicker = () => {
    setMostrarHoraFimEvento(true);
  };

  const hideTimeFimPicker = () => {
    setMostrarHoraFimEvento(false);
  };

  const handleTimeFimConfirm = (timefim) => {
    console.warn("Horário de término: ", timefim);
    hideTimeFimPicker();
    setHoraFimEvento(parseHoraFim(timefim));
  };
  const parseHoraFim = (timefim) => {
    return `${timefim.getHours().toString().padStart(2,0)}:${timefim.getMinutes().toString().padStart(2,0)}`;
  }


  const createEvento = async () => {

    if (nomeEvento && dataEvento && mostrarHrInicioEvento && mostrarHoraFimEvento && valorEvento){
      try{
        const response = await api.post('/Evento', {"nome": nomeEvento, "dtevento": dataEvento, "hrinicio": mostrarHrInicioEvento, "hrfim": mostrarHoraFimEvento, "valor": valorEvento});
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

          <TextInput placeholder="Nome do Evento" style={styles.inputNomeEvento} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />
          <Text></Text>
      
          <View style={styles.ladoalado}>
            <TextInput style={styles.input} placeholder="Data" value={dataEvento} editable={false} onPressIn={showDatePicker}></TextInput>
            <Icon style={styles.icon} name="calendar-alt" onPress={showDatePicker} size={30}></Icon>

            <DateTimePickerModal
              isVisible={mostrarDataEvento}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <Text></Text>

          <View style={styles.ladoalado}>
            <TextInput style={styles.input} placeholder="Hora Inicial" value={horaInicioEvento} editable={false}></TextInput>
            <Icon style={styles.icon} name="clock" onPress={showTimeInicioPicker} size={30}></Icon>

            <DateTimePickerModal
              isVisible={mostrarHrInicioEvento}
              mode="time"
              onConfirm={handleTimeInicioConfirm}
              onCancel={hideTimeInicioPicker}
            />
          </View>
          <Text></Text>

          <View style={styles.ladoalado}>
            <TextInput style={styles.input} placeholder="Hora Final" value={horaFimEvento} editable={false}></TextInput>
            <Icon style={styles.icon} name="clock" onPress={showTimeFimPicker} size={30}></Icon>
            <DateTimePickerModal
              isVisible={mostrarHoraFimEvento}
              mode="time"
              onConfirm={handleTimeFimConfirm}
              onCancel={hideTimeFimPicker}
            />
          </View>
          <Text ></Text>

          <TextInput placeholder="Valor do Evento" style={styles.inputValor} value={valorEvento} onChangeText={item => {setValorEvento(item)}} />
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
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
  },

  inputNomeEvento: {
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
  },

  inputValor: {
    height: 40,
    width: 150,
    textAlign: 'center',
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginRight: 40,
  },

  icon: {
    paddingLeft: 10,
    textAlign: 'center',
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