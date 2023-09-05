import React from 'react'
import { Pressable } from 'react-native'


const ButtonNavigator = ({ navigation, routeName, children, classTheme }) => {

    const _onPress = () => {
      console.log(routeName)
        navigation.navigate(routeName)
    }

  return (
    <Pressable className={classTheme} onPress={_onPress}>
        {children}
    </Pressable>
  )
}

export default ButtonNavigator