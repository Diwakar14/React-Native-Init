import { StyleSheet } from "react-native";
import COLORS from "../../../Constants/Colors";
import FONTS from "../../../Constants/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        padding: 20
    },
    heading: {
        fontSize: 32,
        fontFamily: FONTS.Primary,
        color: COLORS.Heading,
        textAlign: 'center'
    },
    subHeading: {
        fontSize: 14,
        color: COLORS.SubHeading,
        textAlign: 'center',
        fontFamily: FONTS.Primary,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '100%'
    }
})