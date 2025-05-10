import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"],
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.image} />
      <Text style={styles.text}>Fundação: {time.fundacao}</Text>
      <Text style={styles.text}>Estádio: {time.estadio}</Text>
      <Text style={styles.text}>Mascote: {time.mascote}</Text>
      <Text style={styles.text}>Cores: {time.cores.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});