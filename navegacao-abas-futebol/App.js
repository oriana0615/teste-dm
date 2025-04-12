import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'gray',
            headerStyle: { backgroundColor: '#e91e63' },
            headerTintColor: '#fff',
            tabBarStyle: { backgroundColor: '#f8f8f8' },
            tabBarLabelStyle: { textAlign: 'center' },
            headerTitleAlign: 'center',
          }}
        >
          {/* Escudo */}
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} />,
            }}
          />

          {/* Jogadores */}
          <Tab.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />,
            }}
          />

          {/* Títulos */}
          <Tab.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}