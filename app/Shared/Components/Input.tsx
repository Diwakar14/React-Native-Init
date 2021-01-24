import React, { memo } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';

interface InputProps {
    placeholder?: string,
    style?: object,
    keyboard?: string,
    onChangeText?: any,
    value?: any,
    type?: string,
    icon?: any,
    textAlign?: any,
    autoFocus?: boolean,
    limit?: number,
    marginBottom?: number,
    error?: any,
    onBlur?: any,
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        fontSize: 16,
        fontFamily: FONTS.Primary,
        textAlign: 'center',
        color: COLORS.Heading,
        paddingLeft: 20,
        flex: 1
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: COLORS.Light,
        borderRadius: 30,
        marginBottom: 20,
    }
})

const Input = (props: InputProps) => {
    return (
        <View style={[styles.inputWrapper, { marginBottom: props.marginBottom ?? 10 }]}>
            <Icon name={props.icon ? props.icon : 'phone'} size={16} color={COLORS.Primary} />
            <TextInput
                keyboardType={props.keyboard === 'numeric' ? 'decimal-pad' : 'default'}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                maxLength={props.limit ? props.limit : 100}
                autoFocus={props.autoFocus}
                value={props.value}
                secureTextEntry={props.type == 'password' ? true : false}
                style={[styles.textInput, { textAlign: props.textAlign }]} />
            {props.error && <Icon name="alert-circle" size={16} color={COLORS.Danger} />}
        </View>
    )
}

export default memo(Input);