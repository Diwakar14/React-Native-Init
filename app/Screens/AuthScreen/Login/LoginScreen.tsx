import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../../Shared/Components/Button';
import Selector from '../../../Shared/Components/Dropdown';
import Input from '../../../Shared/Components/Input';
import { styles } from './LoginScreenStyles';

const LoginScreen = () => {
    const [isLoading, setIsLoading] = useState({ register: false, login: false, country: false });
    const [isMounted, setIsMounted] = useState(false);
    const [countries, setCountries] = useState([]);
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const handlePhoneLogin = () => {

    }

    const handleTextChange = useCallback((value) => {
        // console.log("Hello I am entring data", value)
    }, []);

    const getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all?fields=flag;callingCodes;name')
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
            <View style={styles.content}>
                <Selector />
                <Input placeholder="Enter your phone number" keyboard="numeric" onChangeText={handleTextChange} />
                <Button label="Continue" type="primary" onPress={handlePhoneLogin} />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;