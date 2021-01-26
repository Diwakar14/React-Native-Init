import React from 'react';
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FONTS from '../../Constants/Fonts';

const styles = StyleSheet.create({
    tabBarContainer: {
        padding: 8,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 10
    },
    itemStyle: {
        textAlign: 'center',
        fontFamily: FONTS.Primary,
        fontSize: 12
    }
})

const TabBar = ({ state, descriptors, navigation }: any) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                let iconName: string = 'home';

                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Profile':
                        iconName = 'account-circle';
                        break;
                    case 'Settings':
                        iconName = 'settings';
                        break;
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabBarContainer}
                        key={index.toString()}
                    >
                        <Icon name={iconName} size={22} />
                        <Text style={{ color: isFocused ? '#673ab7' : '#222', ...styles.itemStyle }}>
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}


export default TabBar;