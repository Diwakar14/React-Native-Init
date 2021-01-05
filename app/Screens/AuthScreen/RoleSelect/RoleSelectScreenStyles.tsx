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
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    block: {
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 1,
        margin: 8
    },
    blockTitle: {
        fontFamily: FONTS.Primary,
        fontSize: 16,
        paddingTop: 5,
        color: COLORS.SubHeading
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '100%'
    }
})