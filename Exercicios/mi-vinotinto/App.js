import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

export default function App() {
  const nomeJogador = 'Yeferson Julio Soteldo Martínez';
  const time = 'Vinotinto';
  const posicao = 'Atacante - Ponta Esquerda';
  const nacionalidade = 'Venezuelano';
  const idade = 27;

  function alerta() {
    alert('Gol do Jogador Soteldo!');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Informações do Jogador</Text>
        <Text style={styles.nome}>Nome: {nomeJogador}</Text>
        <Text style={styles.texto}>Time: {time}</Text>
        <Text style={styles.texto}>Posição: {posicao}</Text>
        <Text style={styles.texto}>Nacionalidade: {nacionalidade}</Text>
        <Text style={styles.texto}>Idade: {idade}</Text>
        <TouchableOpacity style={styles.botao} onPress={alerta}>
          <Text style={styles.botaoTexto}>GOL</Text>
        </TouchableOpacity>
        <Image source={require('./img/vinot.jpg')} style={styles.imagem} />
        <Image source={require('./img/sote.jpg')} style={styles.imagem} />
        <Image source={require('./img/vinov.jpeg')} style={styles.imagem} />
        <Image source={require('./img/gol.jpg')} style={styles.imagem} />
        <Image source={require('./img/equi.jpg')} style={styles.imagem} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
    color: '#666',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});