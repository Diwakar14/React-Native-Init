import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Animated, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../../Shared/Components/Button';
import Selector from '../../../Shared/Components/Dropdown';
import Input from '../../../Shared/Components/Input';
import VerifyOTP from '../../../Shared/Components/VerifyOTP';
import { styles } from './LoginScreenStyles';


const LoginScreen = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState({ register: false, login: false, country: false });
    const [isMounted, setIsMounted] = useState(false);
    const [countries, setCountries] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirm, setConfirm] = useState({});

    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);
    let _stepScroll: any = useRef();

    const handlePhoneLogin = () => {
        _stepScroll.current.scrollToIndex({ index: 1, animated: true })
    }

    const handleTextChange = useCallback((value) => {
        setPhoneNumber(value);
    }, []);

    const handleSelectedCountry = useCallback((value) => {
        console.log("entring data", value);
    }, []);
    const handleChangeNumber = useCallback(() => {
        _stepScroll.current.scrollToIndex({ index: 0, animated: true });

        console.log('Change Number')
    }, []);


    const handleOTPVerify = useCallback(() => {
        navigation.navigate('RoleSelect');
    }, []);


    const getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/region/asia?fields=flag;callingCodes;name')
            .then(data => data.json())
            .then(countries => {
                setCountries(countries);
            })
            .catch(e => {
                console.log('Cannot get countries.');
            });
    }

    useEffect(() => {
        setIsMounted(true);
        getCountries();
        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Login</Text>
                <Text style={styles.subHeading}>Enter your phone number to receive OTP.</Text>
            </View>

            <Animated.FlatList
                ref={_stepScroll}
                data={[1, 2]}
                keyExtractor={item => item.toString()}
                scrollEnabled={false}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    switch (item) {
                        case 1:
                            return <View style={styles.content}>
                                <Selector data={countries} onSelected={handleSelectedCountry} />
                                <Input autoFocus={true} limit={10} textAlign="center" placeholder="Enter your phone number" keyboard="numeric" onChangeText={handleTextChange} />
                                <Button label="Continue" type="primary" onPress={handlePhoneLogin} />
                                <View style={styles.socialLogins}>
                                    <Button label="Continue with Google" icon="sc-google-plus" type="secondary" marginBottom={10} onPress={() => { }} />
                                    <Button label="Continue with Facebook" icon="sc-facebook" type="secondary" onPress={() => { }} />
                                </View>
                            </View>
                        case 2: return <VerifyOTP onChangeNumber={handleChangeNumber} onOTPVerify={handleOTPVerify} />
                    }
                    return null
                }}
            />
        </SafeAreaView>
    )
}

export default LoginScreen;