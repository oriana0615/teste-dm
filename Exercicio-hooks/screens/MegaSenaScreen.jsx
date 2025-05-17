import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

function gerarJogoUnico() {
  const numeros = [];
  while (numeros.length < 6) {
    const num = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }
  return numeros.sort((a, b) => a - b);
}

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarNovoJogo() {
    const novoJogo = gerarJogoUnico();
    setJogoGerado(novoJogo);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge" style={styles.title}>Gerador Mega Sena</Text>
          <Text variant="headlineMedium" style={styles.jogoAtual}>
            {jogoGerado.length > 0 ? jogoGerado.join(' - ') : 'Clique para gerar um jogo!'}
          </Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button 
            mode="contained" 
            onPress={gerarNovoJogo}
            style={styles.button}
          >
            Gerar Jogo
          </Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, styles.historico]}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.historicoTitle}>Histórico</Text>
          <FlatList
            data={jogosMegaSena}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({ item, index }) => (
              <Text style={styles.jogoItem}>
                {index + 1}. {item.join(' - ')}
              </Text>
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jogoAtual: {
    color: '#0066cc',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
  },
  historico: {
    flex: 1,
  },
  historicoTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jogoItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});