// IMPORT

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


// FUNCTI Q REPRESENTA O COMPONENTE
export default function App() {
  
  // LOGICA DO COMPONENTE
  
  const nome = 'Oriana';

  function clique() {
    alert('Clicou');
  }

  // RETORNO DESSA FUNÇÃO COM O TEMPLATE DO QUE VAI SER RENDERIZADO NA TELA DO USUARIO(JSX)


  return (
    // <ScrollView>

    <View style={styles.container}>
      <Text style={styles.texto}>Aqui com cor</Text>

      <Text>Ola pana!</Text>
      <Text>Meu nome é {nome}</Text>
      {/* <Text style=   >algum texto, colocale estilo</Text> */}

      <Button title="Clique aqui" onPress={() => alert('Clicou')} />
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
      {/* <StatusBar style="auto" /> */}

      <Image source={require('./Img/crede.jpeg')} style={{ width: 50, height: 50 }} />
      
    </View>
    // </ScrollView>
  );
}


// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: 'red',
    fontSize: 30,
  }
});
