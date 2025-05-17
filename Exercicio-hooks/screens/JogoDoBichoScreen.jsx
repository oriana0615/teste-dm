import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg' },
  { numero: 2, nome: 'Águia', imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg' },
  { numero: 8, nome: 'Camelo', imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg' },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);
  const [animaisSorteados, setAnimaisSorteados] = useState([]);

  function sortearAnimal() {
    // Filtra animais que ainda não foram sorteados
    const disponiveis = animais.filter(animal => 
      !animaisSorteados.some(a => a.numero === animal.numero)
    );

    // Se todos já foram sorteados, reinicia
    if (disponiveis.length === 0) {
      const novoAnimal = animais[Math.floor(Math.random() * animais.length)];
      setAnimalGerado(novoAnimal);
      setAnimaisSorteados([novoAnimal]);
      return;
    }

    // Sorteia um animal disponível
    const novoAnimal = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    setAnimalGerado(novoAnimal);
    setAnimaisSorteados([...animaisSorteados, novoAnimal]);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text style={styles.title}>Jogo do Bicho</Text>
          
          {animalGerado ? (
            <>
              <Text style={styles.animalNumero}>Número: {animalGerado.numero}</Text>
              <Text style={styles.animalNome}>{animalGerado.nome}</Text>
              <Image
                source={{ uri: animalGerado.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />
            </>
          ) : (
            <Text style={styles.placeholder}>Clique para sortear um animal</Text>
          )}
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button 
            mode="contained" 
            onPress={sortearAnimal}
            style={styles.button}
          >
            Sortear Animal
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    elevation: 3,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animalNumero: {
    fontSize: 18,
    color: '#666',
  },
  animalNome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginVertical: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  placeholder: {
    fontSize: 16,
    color: '#999',
    marginVertical: 20,
  },
  actions: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
  },
});