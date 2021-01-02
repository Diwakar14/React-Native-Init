import { StyleSheet } from 'react-native';
import COLORS from '../../../Constants/Colors';
import FONTS from '../../../Constants/Fonts';
import Values from '../../../Constants/Values';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    content: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    header: {
        marginTop: 20
    },
    heading: {
        fontSize: 22,
        fontFamily: FONTS.Primary,
        color: COLORS.Heading,
        textAlign: 'center'
    },
    subHeading: {
        fontSize: 14,
        color: COLORS.SubHeading,
        textAlign: 'center',
        fontFamily: FONTS.Primary,

    }
})