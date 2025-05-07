// importação de telas
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ReceitaScreen from "../screens/ReceitaScreen"


const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{ title: 'Receitas' }}
      />
      <Stack.Screen 
        name='ReceitaScreen' 
        component={ReceitaScreen} 
        options={({ route }) => ({ title: route.params.item.nome })}
      />
    </Stack.Navigator>
  )
}