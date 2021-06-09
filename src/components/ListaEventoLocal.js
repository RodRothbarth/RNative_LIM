import React, {useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../services/axios';

const ListaEventosLocal = ({navigation}) => {

  // const [nomeEvento, setNomeEvento] = useState('Night-bar');
  // const [dataEvento, setDataEvento] = useState('04/06/2021');
  // const [hrInicioEvento, setHrInicioEvento] = useState('20:00');
  // const [hrFimEvento, setHrFimEvento] = useState('00:00');
  // const [valorEvento, setValorEvento] = useState('20.00');
  const [eventos, setEvento] = useState([]);

  useEffect (()=> {getEventos()}, []);

  const getEventos = async () => {
    try{
      const response = await api.get('/estabelecimento/:idlocal/eventos'); // mudar endpoint
      console.log(JSON.stringify(response.data));
      setEvento(response.data);
      console.log(eventos[0].idevento)
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  useEffect (()=> {deleteEvento()}, []);

  const deleteEvento = async () => {
    try{
      const response = await api.delete('/eventos:id'); // mudar endpoint
      console.log(JSON.stringify(response.data));
      setEvento(response.data);
      console.log(eventos[0].idevento)
    }catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  return (

      <View style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.tituloPagina}>Meus Eventos</Text>

        <FlatList
          data={eventos}
          keyExtractor={(item)=> item.idevento}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=> navigation.navigate('Candidatos')}>
                <View style={styles.eventoContainer}>

                  <Text style={styles.dotLeft}></Text>

                  <View style={styles.vEsquerda}>

                    <Text style={styles.tituloEvento}>{item.nomedoevento}</Text>

                    <View >
                      <Text style={styles.dataEvento}>{item.dtevento}</Text>
                    </View>
                  
                    <View>
                      <Text style={styles.horarios}>{item.hrinicioevento} à {item.hrfimEvento}</Text>
                    </View>

                    <View style={styles.icone}>
                      <View>
                        <Icon name="trash" style={styles.iconTrash} onPress={deleteEvento} size={30} color="#fff" />
                      </View>

                      <View>
                        <Icon name="edit" style={styles.iconUpdate} size={30} color="#000" onPress={()=> navigation.navigate('Update')} />
                      </View>
                    </View>
            
                  </View>
                    <View style={styles.vDireita}>
                    <Text style={styles.cifrao}>Valor</Text>
                    <Text style={styles.valorEvento}>{item.valorevento}</Text>
                    <Text style={styles.dotRight}></Text>
                  </View>
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
  icone: {
    // marginRight: 5,
    // marginTop: 10,
    justifyContent: 'center',
    flexDirection : 'row',
  },
  iconTrash: {
    marginTop: 10,
    marginRight: 30,
  },
  iconUpdate: {
    marginTop: 10,
    marginLeft: 10,
  },
  image:{
    width:'100%',
    height:'100%'
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
export default ListaEventosLocal;