import React, { useCallback, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import COLORS from '../../../Constants/Colors';
import Values from '../../../Constants/Values';
import Onboard from '../../../Models/OnboardModel';
import Button from '../../../Shared/Components/Button';
import { styles } from './OnboardScreenStyles';


const OnboardScreen = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState({ register: false, login: false });
    const [activeSlide, setActiveSlide] = useState(0);
    const handleCreateAccount = useCallback(() => {
        navigation.navigate('Register')
    }, []);
    const handleLoginAccount = useCallback(() => {
        navigation.navigate('Login');
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.sliderWrapper}>
                <FlatList
                    data={Onboard}
                    pagingEnabled
                    horizontal
                    onMomentumScrollEnd={e => {
                        let activeIndex = Math.floor(e.nativeEvent.contentOffset.x / Values.screenWidth);
                        setActiveSlide(activeIndex);
                    }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <View style={styles.cardContainer}>
                            <Image source={item.img} style={styles.cardsImage} />
                            <Text style={styles.cardTextHeading}>{item.title}</Text>
                            <Text style={styles.cardTextDesc}>{item.desc}</Text>
                        </View>
                    }}
                />
                <View style={styles.dotWrapper}>
                    {
                        Onboard.map((item, index) => {
                            return <Animated.View key={item.id} style={[styles.dots, { backgroundColor: activeSlide === index ? COLORS.Primary : COLORS.Light }]} />
                        })
                    }
                </View>

            </View>


            <View style={styles.footer}>
                <Button label="Create Account" marginBottom={15} isLoading={false} type="primary" onPress={handleCreateAccount} />
                <Button label="Login to Account" isLoading={false} type="secondary" onPress={handleLoginAccount} />
            </View>
        </SafeAreaView>
    )
}


export default OnboardScreen;