import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TextInput, Pressable } from 'react-native'
import ButtonNavigator from '../components/ButtonNavigator'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginState, setLoginState] = useState("")

  const classInput = "border-2 rounded-md p-2 border-gray-400 outline-none w-full m-0"

  return (
    <View className="flex-1 items-center w-full  m-0">

      <StatusBar style='dark'/>
      
      <View className="h-1/4 items-center justify-center">
          <View className="header flex items-center justify-center gap-y-2 w-full h-full">
            <Image source={require("../../assets/logos/login-logo.svg")} className="h-[45px] w-[360px] self-center" />
            <Text className="capitalize text-gray-400 text-center" >delivery outside country</Text>
          </View>
      </View>

      <View className="inputs w-full px-10 gap-y-4 items-center justify-center">

        <View className="email gap-y-2 w-full">
          <Text className="capitalize" >email address</Text>
          <TextInput value={email} onChangeText={setEmail} className={classInput} />
        </View>

        <View className="password gap-y-2 w-full">
          <Text className="capitalize">passowrd</Text>
          <TextInput value={password} onChangeText={setPassword} className={classInput} secureTextEntry={true} />
        </View>

        <View className="login-button w-full">
          <ButtonNavigator navigation={navigation} routeName="Home" classTheme="bg-gray-300 p-2 rounded-md items-center flex-row justify-between w-full" >
            <Text className="text-gray-500 text-center pl-5 flex-1" >Login</Text>
            <AntDesign name="login" size={24} color="gray" />
          </ButtonNavigator>
        </View>

        <View className="flex flex-row items-center w-full">
          <View className="border-b-2 border-1 border-gray-400 flex-1"></View>
          <Text className="text-center text-gray-400 mx-2">Or</Text>
          <View className="border-b-2 border-1 border-gray-400 flex-1"></View>
        </View>

        <View className="flex login-buttons flex-1 w-full">

          {/* Google */}
          <ButtonNavigator navigation={navigation} classTheme="mb-4 w-full flex flex-row items-center justify-center border-2 border-gray-400 py-3 rounded-md">
            <AntDesign name="google" size={24} color="red" />
            <Text className="ml-3" >Sign in With Google</Text>
          </ButtonNavigator>

          {/* Apple */}
          <ButtonNavigator navigation={navigation} classTheme="mb-4 w-full flex flex-row items-center justify-center border-2 border-gray-400 py-3 rounded-md">
            <AntDesign name="apple1" size={24} color="black" />
            <Text className="ml-3" >Sign in With Apple</Text>
          </ButtonNavigator>
        </View>

        <View className="register flex flex-row">
          <Text className="capitalize mr-1">not registred yet ?</Text>
          <Pressable>
            <Text className="text-primary">Create an Account</Text>
          </Pressable>
        </View>

      </View>

    </View>
  )
}

export default Login