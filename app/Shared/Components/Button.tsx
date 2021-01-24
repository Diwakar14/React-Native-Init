import React, { memo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';
import Icon from 'react-native-vector-icons/EvilIcons';

interface ButtonProps {
    label: string,
    icon?: string,
    isLoading?: boolean,
    type: string,
    onPress: any,
    marginBottom?: number
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.Primary,
        paddingVertical: 15,
        borderRadius: 40,
    },
    buttonText: {
        fontFamily: FONTS.Primary,
        color: COLORS.Light,
        textAlign: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    }
})

const Button = (props: ButtonProps) => {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon)
    let customStyles = {
        backgroundColor: props.type == 'primary' ? COLORS.Primary : props.type == 'link' ? 'transparent' : COLORS.ExtraLight,
        color: props.type == 'primary' ? COLORS.Light : COLORS.Primary
    }
    return (
        <Pressable disabled={props.isLoading} style={({ pressed }) => [styles.buttonContainer, { transform: [{ scale: pressed ? .98 : 1 }], backgroundColor: customStyles.backgroundColor, marginBottom: props.marginBottom }]} onPress={props.onPress}>
            <View style={styles.buttonGroup}>
                {props.icon ? <AnimatedIcon style={{ marginRight: 10 }} name={props.icon} size={22} color={customStyles.color} /> : null}
                <Text style={[styles.buttonText, { color: customStyles.color }]}>{props.label}</Text>
                {props.isLoading ? <AnimatedIcon style={{ marginLeft: 5, marginTop: 3 }} name="spinner-2" size={22} color={customStyles.color} /> : null}
            </View>
        </Pressable>
    )
}

export default memo(Button);