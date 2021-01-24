import { StyleSheet } from 'react-native';
import FONTS from '../../../Constants/Fonts';
import Values from '../../../Constants/Values';

export const styles = StyleSheet.create({
    header: {
        padding: 10,

    },
    card: {
        width: Values.screenWidth * .9,
        height: Values.screenHeight * .35,
        borderRadius: 12,
        margin: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    gradient: {
        width: Values.screenWidth * .8,
        height: Values.screenHeight * .6,
    },
    cardView: {
        // position: 'absolute',
        left: 0,
        bottom: 0,
        width: Values.screenWidth * .9,
        height: Values.screenHeight * .35,
    },
    cardHolderName: {
        fontFamily: FONTS.Secondary,
        fontSize: 14,
        color: '#ccc',
        textTransform: 'uppercase'
    },
    cardHeading: {
        fontFamily: FONTS.Secondary,
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        padding: 15
    },
    cardName: {
        fontFamily: FONTS.Secondary,
        fontSize: 18,
        color: 'white'
    },
    cardNo: {
        fontFamily: FONTS.Secondary,
        fontSize: 18,
        color: 'white',
        letterSpacing: 1
    },
    footer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        position: 'absolute'
    }
})