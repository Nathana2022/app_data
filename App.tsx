import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native"
import IntroPage from "./lib/pages/intro/IntroPage";

const Stack=createStackNavigator()
const App  = () : React.JSX.Element =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="intro2">
      <Stack.Screen name={"intro"} component={IntroPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;