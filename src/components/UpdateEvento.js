import React, { useState } from 'react';
import { useEffect } from 'react';
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
  FlatList,
  StatusBar,
} from 'react-native';

const UpdateEvento = ({navigation}) => {
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


  const atualizaEvento = async () => {

    if (nomeEvento && dataEvento && mostrarHrInicioEvento && mostrarHoraFimEvento && valorEvento){
      try{
        const response = await api.put('/Evento', {"nome": nomeEvento, "dtevento": dataEvento, "hrinicio": mostrarHrInicioEvento, "hrfim": mostrarHoraFimEvento, "valor": valorEvento});
        console.log(JSON.stringify(response.data));
        // navigation.navigate('Home');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }
  return (
     
    <ImageBackground source={require('../assets/evento.jpg')} style={styles.image}>
      <View style={styles.container}>
        <StatusBar hidden />
        <Text></Text>
        <Text style={styles.header}>Atualizar Evento</Text>
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
            return(
              <View style={styles.container}>

                <TextInput placeholder="Nome do Evento" style={styles.inputNomeEvento} value={nomeEvento} onChangeText={item => {setNomeEvento(item)}}>{item.nomedoevento}</TextInput>
                <Text></Text>
              
                <View style={styles.ladoalado}>
                  <TextInput style={styles.input} placeholder="Data" value={dataEvento} editable={false}>{item.dtevento}</TextInput>
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
                  <TextInput style={styles.input} placeholder="Hora Inicial" value={horaInicioEvento} editable={false}>{item.hrinicioevento}</TextInput>
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
                  <TextInput style={styles.input} placeholder="Hora Final" value={horaFimEvento} editable={false}>{item.hrfimevento}</TextInput>
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
                    unit: 'R$',
                    suffixUnit: ''
                  }}
                  value={valorEvento.advanced}
                  onChangeText={text => {
                    setValorEvento({
                      advanced: text
                    })
                  }}
                >{item.valorevento}</TextInputMask>
          
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </View>
            );
          }}
        />
          
        <View>
          <TouchableOpacity style={styles.button} onPress={atualizaEvento}>
            <Text style={styles.buttonText}>Atualizar</Text>
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

  inputValor: {
    height: 40,
    width: 150,
    textAlign: 'center',
    color: '#000',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginRight: 40,
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
    justifyContent: 'center'
  },
})

export default UpdateEvento;