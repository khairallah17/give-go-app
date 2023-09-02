import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import ButtonNavigator from '../components/ButtonNavigator'
import { withExpoSnack } from 'nativewind'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons'; 

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginState, setLoginState] = useState("")

  const classInput = "border-2 rounded-md p-2 border-gray-400 outline-none w-full m-0"

  return (
    <View className="flex-1 items-center justify-around w-full m-0">
      
      <View className="header items-center justify-center gap-2 w-full">
        <Image source={require("../../assets/logos/login-logo.svg")} className="h-[45px] w-[360px]" />
        <Text className="capitalize text-gray-400" >delivery outside country</Text>
      </View>

      <View className="inputs w-full px-10 gap-4 items-center justify-center">

        <View className="email gap-y-2 w-full">
          <Text className="capitalize" >email address</Text>
          <TextInput value={email} onChangeText={setEmail} className={classInput} />
        </View>

        <View className="password gap-y-2 w-full">
          <Text className="capitalize">passowrd</Text>
          <TextInput value={password} onChangeText={setPassword} className={classInput} secureTextEntry={true} />
        </View>

        <View className="login-button w-full">
          <ButtonNavigator navigation={navigation} to={"home"} classTheme="bg-gray-300 p-2 rounded-md items-center flex-row justify-between w-full" >
            <Text className="text-gray-500 text-center w-full" >Login</Text>
            <AntDesign name="login" size={24} color="gray" />
          </ButtonNavigator>
        </View>

        <View className="flex flex-row items-center w-full">
          <View className="border-b-2 border-1 border-gray-400"></View>
          <Text className="text-center text-gray-400">Or</Text>
          <View className="border-b-2 border-1 border-gray-400"></View>
        </View>

      </View>

    </View>
  )
}

export default withExpoSnack(Login)