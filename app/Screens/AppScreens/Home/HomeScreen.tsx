import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, Extrapolate, interpolate, timing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Button from '../../../Shared/Components/Button'

const HomeScreen = () => {
    const opacity: any = useSharedValue(1);
    const scale = useSharedValue(1);

    const show = useSharedValue(true);

    const myStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacity.value, { duration: 2000, easing: Easing.ease }),
        }
    });

    return (
        <View style={styles.container}>
            {
                show.value
                    ? <Animated.View style={[styles.box, myStyles]}></Animated.View>
                    : null
            }

            <Button label="Show / Hide" type="Secondary" onPress={() => {
                opacity.value = 0
            }} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',

    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'crimson',
        borderRadius: 4,
        alignSelf: "center",
        marginBottom: 20
    }
})
