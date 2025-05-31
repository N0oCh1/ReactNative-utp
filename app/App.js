import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './Home';
import { StatusBar } from 'react-native';
import CalculadoraComponent from './Calculadora';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'}/>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeComponent}
        />
        <Stack.Screen
        name='Calculadora'
        component={CalculadoraComponent}
        />
      </Stack.Navigator>


    </NavigationContainer>
  )
}


