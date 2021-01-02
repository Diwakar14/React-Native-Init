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
        width: 300,
        height: 300,
        resizeMode: 'center'
    },
    cardTextHeading: {
        fontFamily: FONTS.Primary,
        fontSize: 16,
        marginVertical: 10,
        color: COLORS.Primary
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30
    }
})