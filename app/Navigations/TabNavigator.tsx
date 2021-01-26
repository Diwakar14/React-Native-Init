import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/AppScreens/Home/HomeScreen';
import SettingsScreen from '../Screens/AppScreens/Settings/SettingsScreen';
import ProfileScreen from '../Screens/AppScreens/Profile/ProfileScreen';
import TabBar from '../Shared/Components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default memo(TabNavigator);