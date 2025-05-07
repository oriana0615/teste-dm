import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function HomeScreen(props) {

  const { navigation, route } = props

  // SERVEM PARA NAVEGAÇÃO ENTRE AS TELAS
  console.log("NAVIGATION => ", navigation)

  // SERVE PARA PEGAR OS PARAMETROS E DADOS DA ROTA
  console.log("ROUTE => ", route)


  return (
    <View>
      <Text>HomeScreen</Text>

    <Button
      mode='contained'
      onPress={() => navigation.navigate("ProfileScreen")}
      // style={{ marginTop: 20 }}
    
    >
      Ir para Tela Profile

    </Button>

    </View>
  )
}

const styles = StyleSheet.create({})