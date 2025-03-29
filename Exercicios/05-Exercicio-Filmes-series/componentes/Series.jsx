import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Serie({ nome, ano, diretor, temporadas, capa }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Série</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Temporadas: {temporadas}</Text>
      <Image
        source={{ uri: capa }}
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
  imagem: {
    height: 200,
    width: 150,
    marginTop: 10,
  },
});