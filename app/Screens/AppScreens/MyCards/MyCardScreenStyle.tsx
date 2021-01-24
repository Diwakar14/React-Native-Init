import { StyleSheet } from 'react-native';
import FONTS from '../../../Constants/Fonts';

export const styles = StyleSheet.create({
    header: {
        padding: 20,
    },
    headingText: {
        fontFamily: FONTS.Secondary,
        fontSize: 30,
        marginBottom: 60,
        textTransform: 'uppercase',
    },
    balanceText: {
        fontFamily: FONTS.Secondary,
        fontSize: 18,

    },
    balanceValue: {
        fontFamily: FONTS.Secondary,
        fontSize: 32,
        padding: 0,
    },
})