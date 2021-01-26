import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Linking, StyleSheet, Text, View } from 'react-native';
import FONTS from '../../Constants/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ccc',
        height: 160,
        paddingHorizontal: 20
    }
})
const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={{ fontFamily: FONTS.Secondary, fontSize: 32, color: 'white' }}>Hello</Text>
            </View>
            <DrawerItem label="Profile" onPress={() => Linking.openURL('https://mywebsite.com/help')}></DrawerItem>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;