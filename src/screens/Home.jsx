import React from 'react'
import { View, Text, Pressable } from 'react-native'

const Home = ({ navigation }) => {

  const _onPress = () => {
    navigation.navigate("login")
  }

  return (
    <View className="flex-1 items-center justify-center" >
      <Text>
        Home
      </Text>
      <Pressable onPress={_onPress} >
        <Text>
          Login Page
        </Text>
      </Pressable>
    </View>
  )
}

export default Home