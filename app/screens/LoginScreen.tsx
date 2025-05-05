import { FC } from "react"
import { observer } from "mobx-react-lite" 
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
import { useStores } from "@/models"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}


export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const { authStore } = useStores()
  
  const handleLogin = () => {
    authStore.setAuthToken("loggedIn")
  }
  return (
    <Screen preset="fixed">
      <View>
        <TouchableOpacity onPress={handleLogin}  style={{ width: "90%",
        backgroundColor: "blue", 
        padding: 10,
        alignItems: "center" }}>
          <Text text="login" />
        </TouchableOpacity>
      </View>
    </Screen>
  )

})

const $root: ViewStyle = {
  flex: 1,
}
