import React, { memo } from 'react';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DrawerNavigator from './DrawerNavigator';

const Stack = createSharedElementStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name="Home" component={DrawerNavigator}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default memo(MainStackNavigator);