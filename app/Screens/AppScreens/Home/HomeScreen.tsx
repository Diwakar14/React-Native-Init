import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { styles } from './HomeScreenStyles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" animated backgroundColor="transparent" translucent={true} />
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;


