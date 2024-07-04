import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Log from "./script/Login";
import Fisrtpage from "./Welcome";
import Singin from "./script/Regist";

function MyStack() {
  return (
    <Stack.Navigator>
  
      <Stack.Screen name="Log" component={Log} 
      options={{
        title: "Log-In",
        headerTitleColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#3b5998"}
      }}/>
      <Stack.Screen name="Singin" component={Singin} />
      <Stack.Screen name="FirstPage" component={Fisrtpage} 
      options={
        {
          title: "Panel De Control",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#525fe1"}
        }
      } />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
