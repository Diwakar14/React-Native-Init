import * as React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';

interface InputProps {
    placeholder?: string,
    style?: object,
    keyboard?: string,
    onChangeText?: any,
    value?: any,

}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        fontSize: 16,
        fontFamily: FONTS.Primary
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: COLORS.Primary,
        borderRadius: 30,
        marginBottom: 10,
    }
})

const Input = (props: InputProps) => {
    return (
        <View style={styles.inputWrapper}>
            <Icon name="phone" size={16} color={COLORS.Primary} />
            <TextInput
                keyboardType={props.keyboard == 'numeric' ? 'decimal-pad' : 'default'}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={styles.textInput} />
            <Icon name="check-circle" size={16} color={COLORS.Primary} />
        </View>
    )
}

export default Input;