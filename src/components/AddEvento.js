import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-text';
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

  const handleTimeInicioConfirm = (time) => {
    console.warn("Hórário de início: ", time);
    hideTimeInicioPicker();
    setHoraInicioEvento(time);

  };
  const parseHora = (time) => {
    return time? `${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}` : "00:00";
  }
    // Hora Final do Evento

  const showTimeFimPicker = () => {
    setMostrarHoraFimEvento(true);
  };

  const hideTimeFimPicker = () => {
    setMostrarHoraFimEvento(false);
  };

  const handleTimeFimConfirm = (time) => {
    console.warn("Horário de término: ", time);
    hideTimeFimPicker();
    setHoraFimEvento(time);
  };
 

  const createEvento = async () => {

    if (nomeEvento && dataEvento && horaInicioEvento && horaFimEvento && valorEvento){
      
      try{
        
        const response = await api.post('/evento', {"nomedoevento": nomeEvento, "dtevento": dataEvento, "hrinicioevento": horaInicioEvento, "hrfimevento": horaFimEvento, "valorevento": valorEvento});
        console.log(response)
        console.log(JSON.stringify(response.data));
        
        // navigation.navigate('ListaEventosLocal');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.warn("Todos os campos devem ser preenchidos")
    }
  }

  return(
    <>  
      <ImageBackground source={require('../assets/evento.jpg')} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.header}>Crie seu Evento</Text>

          <TextInput placeholder="Nome do Evento" style={styles.inputNomeEvento} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}} />
          <Text></Text>
      
          <View style={styles.ladoalado}>
            <TouchableOpacity onPressIn={showDatePicker}>
              <TextInput style={styles.input} placeholder="Data" value={dataEvento} editable={false}></TextInput>
            </TouchableOpacity>
            
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
            <TouchableOpacity onPressIn={showTimeInicioPicker}>
              <TextInput style={styles.input} placeholder="Hora Inicial" value={parseHora(horaInicioEvento)} editable={false}></TextInput>
            </TouchableOpacity>

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
            <TouchableOpacity onPressIn={showDatePicker}>
              <TextInput style={styles.input} placeholder="Hora Final" value={parseHora(horaFimEvento)} editable={false}></TextInput>
            </TouchableOpacity>
            
            <Icon style={styles.icon} name="clock" onPress={showTimeFimPicker} size={30}></Icon>

            <DateTimePickerModal
              isVisible={mostrarHoraFimEvento}
              mode="time"
              onConfirm={handleTimeFimConfirm}
              onCancel={hideTimeFimPicker}
            />
          </View>
          <Text ></Text>

          <TextInputMask
            style={styles.inputValor}
            placeholder="R$ Valor"
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              suffixUnit: ''
            }}
            value={valorEvento}
            onChangeText={text => {
              setValorEvento( text
            )
            }}
          />
          
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
    textAlign: 'center',
    marginBottom: 110
  },

  image:{
    width: "100%",
    height:"100%"
  },

  input: {
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#000',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginLeft:40
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

  inputValor: {
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#000',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    
  },

  icon: {
    paddingLeft: 10,
    textAlign: 'center',
    color: '#fff',
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
    justifyContent: 'center',
    marginTop: 100
  },
})

export default AddEvento;