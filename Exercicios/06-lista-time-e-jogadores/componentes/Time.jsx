import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content style={styles.cardContent}>
        {/* Nome do time centralizado e em negrito */}
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.subtitle}>Fundado em {anoFundacao} - Mascote: {mascote}</Text>
      </Card.Content>
      <Card.Content>
        <Text variant="titleMedium">Jogadores:</Text>
        <FlatList
          horizontal
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} numero={item.numero} imagem={item.imagem} />
          )}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    alignItems: 'center', 
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 20, 
    textAlign: 'center', 
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14, 
    textAlign: 'center', 
    color: 'gray', 
  },
});