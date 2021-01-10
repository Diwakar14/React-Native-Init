import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/Screens/AuthScreen/Login/LoginScreen'
import OnboardScreen from './app/Screens/AuthScreen/Onboard/OnboardScreen';
import RegisterScreen from './app/Screens/AuthScreen/Register/RegisterScreen';
import RoleSelectScreen from './app/Screens/AuthScreen/RoleSelect/RoleSelectScreen';
import UserInfoScreen from './app/Screens/AuthScreen/UserInfo/UserInfoScreen';
import HomeScreen from './app/Screens/AppScreens/Home/HomeScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Onboard" screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name="Onboard" component={OnboardScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen}></Stack.Screen>
        <Stack.Screen name="UserInfo" component={UserInfoScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
