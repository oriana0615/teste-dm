import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0066cc',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
            paddingBottom: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: '#0066cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Mega Sena" 
          component={MegaSenaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-5" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Jogo do Bicho" 
          component={JogoDoBichoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="paw" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}