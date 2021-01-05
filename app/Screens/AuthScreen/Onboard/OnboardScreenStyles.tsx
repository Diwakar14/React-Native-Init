import { StyleSheet } from 'react-native';
import COLORS from '../../../Constants/Colors';
import FONTS from '../../../Constants/Fonts';
import Values from '../../../Constants/Values';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    sliderWrapper: {
        paddingTop: 20,
        borderRadius: 8,
    },
    cardContainer: {
        width: Values.screenWidth,
        height: Values.screenHeight * .6,
        overflow: 'hidden',
        flexGrow: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardsImage: {
        width: 200,
        height: 200,
        resizeMode: 'center'
    },
    cardTextHeading: {
        fontFamily: FONTS.Primary,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        color: COLORS.Primary
    },
    cardTextDesc: {
        fontFamily: FONTS.Primary,
        fontSize: 14,
        color: COLORS.SubHeading,
        textAlign: 'center',
        paddingHorizontal: 40
    },
    dotWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    dots: {
        height: 8,
        width: 8,
        backgroundColor: COLORS.Light,
        borderRadius: 40,
        marginHorizontal: 5
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30
    }
})