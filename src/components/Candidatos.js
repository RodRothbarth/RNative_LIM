import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, FlatList } from 'react-native';


const VerCandidatos = () => {

  const [nomeEvento, setNomeEvento] = useState('Night-bar');
  const [dataEvento, setDataEvento] = useState('04/06/2021');
  const [hrInicioEvento, setHrInicioEvento] = useState('20:00');
  const [hrFimEvento, setHrFimEvento] = useState('00:00');
  const [valorEvento, setValorEvento] = useState('20.00');

  return (
      <View style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.tituloPagina}>Eventos Disponíveis</Text>

        <FlatList
          data={[1, 2, 3]}
          renderItem={() => {
            return (
              <View style={styles.eventoContainer}>
                  <Text style={styles.dotLeft}></Text>

                  <View style={styles.vEsquerda}>
  
                  <Text style={styles.tituloEvento}>{nomeEvento}</Text>

                  <View >
                    <Text style={styles.dataEvento}>{dataEvento}</Text>
                  </View>
                  
                  <View>
                    <Text style={styles.horarios}>{hrInicioEvento} à {hrFimEvento}</Text>
                  </View>
            
                  </View>

                  <View style={styles.vDireita}>
                  <Text style={styles.cifrao}>Valor</Text>
                  <Text style={styles.valorEvento}>{valorEvento}</Text>

                  <Text style={styles.dotRight}></Text>
                </View>
              </View>
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
  eventoContainer : {
    color : '#000',
    width : 350,
    marginBottom : 20,
    flexDirection : 'row',
    padding : 20,
    position: 'relative',
  },
  vEsquerda : {
    width: '65%',
    backgroundColor : '#0ac5a8',
    padding : 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight : 3,
  },
  tituloEvento : {
    fontSize : 24,
    fontWeight : 'bold',
    marginBottom : 5,
    color : '#fff',
    width : 190,
    paddingRight : 20,
  },
  dataEvento : {
    fontSize : 17,
  },
  horarios : {
    fontSize : 15,
  },
  vDireita : {
    width: '35%',
    backgroundColor : '#fff',
    padding : 20,  
    borderTopRightRadius : 10,
    borderBottomRightRadius : 10,
    justifyContent :  'center'
  },
  cifrao : {
    fontSize : 20,
    color : '#000',
  },
  valorEvento : {
    fontSize : 25,
    fontStyle : 'italic',
    color : '#000',
    fontWeight : 'bold',
  },
  dotLeft : {
    position: 'absolute',
    width : 30,
    height : 30,
    top : '51%',
    left : 1,
    zIndex : 1,
    backgroundColor : '#2a2a2a',
    borderRadius : 25
  },
  dotRight : {
    position: 'absolute',
    width : 30,
    height : 30,
    top : '51%',
    right : -16,
    zIndex : 1,
    backgroundColor : '#2a2a2a',
    borderRadius : 25
  }
});
export default VerCandidatos;