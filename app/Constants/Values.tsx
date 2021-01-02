import { Dimensions } from "react-native";

const Values = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    fontScale: Dimensions.get('window').fontScale,
    scale: Dimensions.get('window').scale,
}

export default Values;