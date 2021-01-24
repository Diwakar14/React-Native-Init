import React, { memo } from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/AuthScreen/Login/LoginScreen";
import OnboardScreen from "../Screens/AuthScreen/Onboard/OnboardScreen";
import RegisterScreen from "../Screens/AuthScreen/Register/RegisterScreen";
import RoleSelectScreen from "../Screens/AuthScreen/RoleSelect/RoleSelectScreen";
import UserInfoScreen from "../Screens/AuthScreen/UserInfo/UserInfoScreen";

const Auth = createStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Auth.Screen name="Onboard" component={OnboardScreen}></Auth.Screen>
            <Auth.Screen name="Login" component={LoginScreen}></Auth.Screen>
            <Auth.Screen name="Register" component={RegisterScreen}></Auth.Screen>
            <Auth.Screen name="RoleSelect" component={RoleSelectScreen}></Auth.Screen>
            <Auth.Screen name="UserInfo" component={UserInfoScreen}></Auth.Screen>
        </Auth.Navigator>
    );
}

export default memo(AuthStackNavigator);