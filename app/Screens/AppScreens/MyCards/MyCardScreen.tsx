import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Animated, FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';
import Values from '../../../Constants/Values';
import { CARD } from '../../../Models/CardModel';
import CreditCard from '../../../Shared/Components/CreditCard';
import { styles } from './MyCardScreenStyle';

const MyCardScreen = ({ navigation }: any) => {
    const scrollX = new Animated.Value(0);
    const rotateValue = new Animated.Value(0);
    const CARD_WIDTH = Values.screenWidth * .9 + 20;
    const balanceRef: any = useRef(0);

    const interpolateCard = CARD.map((_, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            (index + 1) * CARD_WIDTH,
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp'
        });
        const rotate = scrollX.interpolate({
            inputRange,
            outputRange: ['0deg', '0deg', '-10deg'],
            extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [.5, 1, .5],
            extrapolate: 'clamp'
        });

        return { scale, opacity, rotate };
    });
    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH);
            if (index >= 0)
                balanceRef.current.setNativeProps({ text: "$ " + CARD[index].amount.toString().replace(/(\d)(?=(\d\d)+$)/g, "$1,") });
        });

        return () => {
            scrollX.removeAllListeners();
        }
    });


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headingText}>My Cards</Text>
                <Text style={styles.balanceText}>Balance</Text>
                <TextInput ref={balanceRef} style={[styles.balanceValue, { textAlign: 'left' }]} />
            </View>

            <Animated.FlatList
                data={CARD}
                keyExtractor={item => item.id}
                horizontal
                bounces={false}
                scrollEventThrottle={16}
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={CARD_WIDTH}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }
                ], { useNativeDriver: true })}
                style={{ position: 'absolute', bottom: 0, }}
                contentContainerStyle={{ padding: 10 }}
                renderItem={({ item, index }) => {
                    return <Pressable onPress={() => {
                        navigation.navigate('MyCardTransactions', { item })
                    }}
                    >
                        <SharedElement id={"cardNo-" + item.cardNo}>
                            <CreditCard
                                styles={{
                                    opacity: interpolateCard[index].opacity,
                                    transform: [
                                        { rotate: interpolateCard[index].rotate },
                                        { scale: interpolateCard[index].scale }
                                    ],

                                }}
                                name={item.name}
                                cardNo={item.cardNo}
                                gradient={item.gradient}
                                cvv={item.cvv}
                                type={item.type}
                            />
                        </SharedElement>
                    </Pressable>

                }}
            />
        </View>
    )
}

export default MyCardScreen

