import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/Screens/AuthScreen/Login/LoginScreen'
import OnboardScreen from './app/Screens/AuthScreen/Onboard/OnboardScreen';
import RegisterScreen from './app/Screens/AuthScreen/Register/RegisterScreen';
import RoleSelectScreen from './app/Screens/AuthScreen/RoleSelect/RoleSelectScreen';
import UserInfoScreen from './app/Screens/AuthScreen/UserInfo/UserInfoScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Onboard" component={OnboardScreen}></Stack.Screen>
        <Stack.Screen name="Login" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="RoleSelect" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={RoleSelectScreen}></Stack.Screen>
        <Stack.Screen name="UserInfo" options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} component={UserInfoScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
