import { View, Pressable } from "react-native"

const LoginButton = ({ children, className }) => {
  return (
    <Pressable className={`${className} `}>
        {children}
    </Pressable>
  )
}

export default LoginButton