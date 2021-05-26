import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MoneyInput from 'react-native-money-input';
import api from '../services/axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';

const VerEvento = ({navigation}) => {
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


  const mostrarEvento = async () => {

    if (nomeEvento && dataEvento && mostrarHrInicioEvento && mostrarHoraFimEvento && valorEvento){
      try{
        const response = await api.get('/Evento', {"nome": nomeEvento, "dtevento": dataEvento, "hrinicio": mostrarHrInicioEvento, "hrfim": mostrarHoraFimEvento, "valor": valorEvento});
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
          <Text style={styles.header}>{nomeEvento}</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          <TextInput style={styles.inputNomeEvento} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />
          <Text></Text>
      
          <View style={styles.ladoalado}>
            <TextInput style={styles.input} value={dataEvento} editable={false}></TextInput>
          </View>
          <Text></Text>

          <View style={styles.ladoalado}>
            <TextInput style={styles.input}  value={horaInicioEvento} editable={false}></TextInput>
          </View>
          <Text></Text>

          <View style={styles.ladoalado}>
            <TextInput style={styles.input} value={horaFimEvento} editable={false}></TextInput>
          </View>
          <Text ></Text>

          <TextInput style={styles.input} value={valorEvento} editable={false}></TextInput>
          
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View>
            <TouchableOpacity style={styles.button} onPress={mostrarEvento}>
              <Text style={styles.buttonText}>Candidatar-se</Text>
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
    // marginRight: 40,
  },

  icon: {
    paddingLeft: 10,
    textAlign: 'center',
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

export default VerEvento;