//Aqui é onde importaremos todas as bibliotecas e componentes que utilizaremos
import { StatusBar } from 'expo-status-bar';
//Todo componente visual utilizado em React Native precisa ser importado
import { StyleSheet, Text, View } from 'react-native';

//Componente tradicional
export default function Aula01() {
  return (
    // O componente View, corresponde ao div, main, section, header do html
    <View style={estilos.container}>
      {/* O componente Text corresposte ao p, h1, h2, h3, span do html */}
      <Text style={estilos.titulo}>Hello World</Text>
      <Text style={{ fontWeight: 'bold' }} >Olá, esse é meu primeiro App!!!</Text>
      {/* Defino e estilizo a barra de status do dispositivo */}
      <StatusBar style="auto" />

      {/* Aqui vou colocar o exercício */}
      <View style={{ width:'100%' }} >
        <Text style= {{ textAlign: 'left', color:'blue' }}> Texto 1 </Text>
        <Text style= {{ textAlign: 'right', fontWeight:'bold' }}> Texto 2 </Text>
        <Text style= {{ textAlign: 'center', color:'red' }}> Texto 3 </Text>
      </View>

    </View>
  );
}

// Para estilizarmos em React Native, importamos o StyleSheet 
// e fazemos um objeto estilização igual ao React
const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30
  }
});
