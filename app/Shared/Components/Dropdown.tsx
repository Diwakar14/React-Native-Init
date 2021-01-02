import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';


interface SelectorProps {
    data?: [],
    onSelected?: any,
}

const styles = StyleSheet.create({
    dropdownWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderColor: COLORS.Primary,
        borderRadius: 30,
        marginBottom: 20,
    },
    selectedText: {
        fontFamily: FONTS.Primary,
        fontSize: 16,
        color: COLORS.Primary
    }
})

const Selector = (props: SelectorProps) => {
    return (
        <View style={styles.dropdownWrapper}>
            <Icon name="flag" size={20} color={COLORS.Primary} />
            <Text style={styles.selectedText}>India</Text>
            <Icon name="chevron-down" size={20} color={COLORS.Primary} />
        </View>
    )
}


export default Selector;