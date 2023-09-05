import React from 'react'
import { Text, View, SafeAreaView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { ImageBackground } from 'react-native'
import ButtonNavigator from '../components/ButtonNavigator'
import { StatusBar } from 'expo-status-bar'

const StartingPage = ({navigation}) => {

  return (
    <SafeAreaView>
        <StatusBar style='dark'/>
        <LinearGradient
            colors={['#007F5F', '#2B9348']}
            className="h-full"
        >
        <ImageBackground source={require("../../assets/images/start-page-bg.png")} className="flex-1 gap-4 items-center justify-center">
            <Image source={require("../../assets/images/logo.svg")} className="justify-center h-[50px] w-[137px]" />
            <Text className="text-white font-bold text-5xl z-99">GIVE & GO</Text>
        </ImageBackground>
        <View className="p-5 gap-2" >
            <Text className="capitalize font-bold text-6xl text-white" >
                let's get started
            </Text>
            <Text className="text-white text-lg" >
                Give & go helps you to bring what you want From The Netherlands
            </Text>
            <ButtonNavigator navigation={navigation} routeName="Login" classTheme="bg-white rounded-md p-2 items-center justify-center my-5" >
                <Text className="text-primary capitalize text-lg focus:text-white" >start delivering</Text>
            </ButtonNavigator>
        </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

export default StartingPage