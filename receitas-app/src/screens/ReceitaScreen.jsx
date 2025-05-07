import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';

export default function ReceitaScreen({ navigation, route }) {
  console.log("RECEITA RECEBIDA => ", route.params.item);

  const receita = route.params.item;

  return (
    <ScrollView>
      <Card style={{ margin: 10 }}>

{/* adicioa  imagem ala tela de receita com detalhes*/}
      <Card.Cover source={{ uri: receita.imagem }} />  

        <Card.Content>
          <Text style={styles.title}>Nome: {receita.nome}</Text>
          <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
          <Text>Porções: {receita.porcoes}</Text>
          <Text style={styles.subtitle}>Ingredientes:</Text>
          {receita.ingredientes.map((ingrediente, index) => (
            <Text key={index}>- {ingrediente}</Text>
          ))}
          <Text style={styles.subtitle}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index}>{passo}</Text>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained-tonal"
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});