import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './Home';
import { StatusBar } from 'react-native';
import CalculadoraComponent from './Calculadora';
import PokeApiComponent from './PokeApi';
import DetailComponent from './pokeDetail';


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
        <Stack.Screen
        name='PokeApi'
        component={PokeApiComponent}
        />
        <Stack.Screen
        name="Detail"
        component={DetailComponent}
        options={{title:"Pokemon detail"}}
        />
      </Stack.Navigator>


    </NavigationContainer>
  )
}


