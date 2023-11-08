import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/home/Home";
import JoinNow from "./src/screens/joinNow/joinNow";
import Login from "./src/screens/login/Login";
import Profile from "./src/screens/profile/Profile";
import CreateAccount from "./src/screens/register/CreateAccount";
import Search from "./src/screens/search/Search";

// Código main do app
const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JoinNow">
        <Stack.Screen
          name="JoinNow"
          component={JoinNow}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
