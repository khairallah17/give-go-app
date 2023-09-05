import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalQuery from './src/context/GlobalQuery';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import StartingPage from './src/screens/StartingPage';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <GlobalQuery>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Starting page" component={StartingPage} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
    </GlobalQuery>
  )
};
