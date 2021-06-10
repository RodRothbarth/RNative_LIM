import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';



const initialRegion = {
  latitude: -27.60281603785831,
  longitude: -48.527914793684424,
  latitudeDelta: 0.09,
  longitudeDelta: 0.045
};

const AvaliacaoBanda = () => {

    const [notaUm, setNotaUm] = useState('1');
    const [notaDois, setNotaDois] = useState('2');
    const [notaTres, setNotaTres] = useState('3');
    const [notaQuatro, setNotaQuatro] = useState('4');
    const [notaCinco, setNotaCinco] = useState('5');
    const [region, setRegion] = useState(initialRegion);


  return (
      <View style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.tituloPagina}>Avalie a Banda/Artista</Text>

        <Text style={styles.small}>Escolha uma nota de 1 a 5 abaixo:</Text>

        <View style={styles.containerAvaliacao}>
            <TouchableOpacity style={styles.aroundNota}>
            <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />
                {/* <Text style={styles.nota}>{notaUm}</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.aroundNota}>
            <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />
                {/* <Text style={styles.nota}>{notaDois}</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.aroundNota}>
            <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />
                {/* <Text style={styles.nota}>{notaTres}</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.aroundNota}>
            <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />
                {/* <Text style={styles.nota}>{notaQuatro}</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.aroundNota}>
            <Icon name="star" style={styles.iconTrash} size={20} color="#ffff00" />
                {/* <Text style={styles.nota}>{notaCinco}</Text> */}
            </TouchableOpacity>
        </View>

        <MapView
            provider={PROVIDER_GOOGLE}
            region={region}
            style={styles.map}
            initialRegion={initialRegion}
        >
          <Marker coordinate={{latitude: initialRegion.latitude, longitude: initialRegion.longitude}} title={'Casa'}>
  
          </Marker>
        </MapView>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 15,
    alignItems : 'center',
    backgroundColor : '#2a2a2a',
    height : '100%',
    width : '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    top: '50%'
  },
  tituloPagina : {
    fontSize : 30,
    color : '#fff',
    marginBottom : 30,
  },
  small : {
    fontSize : 18,
    color : '#fff',
    marginBottom : 25
  },
  containerAvaliacao : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    width: 350,
    backgroundColor: '#fff',
    padding : 25,
    borderRadius : 10
  },
  // aroundNota : {
  //   textAlign: 'center',
  //   backgroundColor: '#0ac5a8',
  //   width : 45,
  //   height : 45,
  //   borderRadius : 50,
  //   alignItems : 'center',
  //   justifyContent : 'center'
  // },
  nota : {
    padding : 10,
    color : '#000',
    fontWeight : 'bold',
  },
});
export default AvaliacaoBanda;