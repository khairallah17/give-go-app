import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export const RouteNavigator = ({ children }) => {
    return(
        <Stack.Navigator>
            { children }
        </Stack.Navigator>
    )
}

const RoutePage = ({ element, name }) => {
  return (
    <Stack.Screen name={name} component={element} options={{
        headerShown: false
    }} />
  )
}

export default RoutePage