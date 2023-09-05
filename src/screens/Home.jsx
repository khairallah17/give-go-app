import { withExpoSnack } from 'nativewind'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

const Home = ({ navigation }) => {

  return (
    <View className="flex-1 items-center justify-center" >
      {/* <Text>
        Home
      </Text>
      <Pressable onPress={_onPress} >
        <Text>
          Login Page
        </Text>
      </Pressable> */}
      hello
    </View>
  )
}

export default withExpoSnack(Home)