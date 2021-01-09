import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Button from '../../../Shared/Components/Button';

const HomeScreen = () => {
    const opacity: any = useSharedValue(1);
    const scale = useSharedValue(1);

    const [show, setShow] = useState(true);

    const myStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacity.value, { duration: 2000, easing: Easing.cubic }),
        }
    });
    return (
        <View style={styles.container}>
            {show && <Animated.View style={[styles.box, myStyles]}></Animated.View>}

            <Button label="Show / Hide" type="Secondary" onPress={() => {
                opacity.value = opacity.value === 0 ? 1 : 0
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
