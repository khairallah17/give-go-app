import React from 'react'
import { Pressable } from 'react-native'


const ButtonNavigator = ({ navigation, to, children, classTheme }) => {

    const _onPress = () => {
        navigation.navigate(to)
    }

  return (
    <Pressable className={classTheme} onPress={_onPress}>
        {children}
    </Pressable>
  )
}

export default ButtonNavigator