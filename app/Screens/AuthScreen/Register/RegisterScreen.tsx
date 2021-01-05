import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../Shared/Components/Button';
import Input from '../../../Shared/Components/Input';
import { styles } from './RegisterScreenStyles';

const RegisterScreen = () => {
    const [isLoading, setIsLoading] = React.useState({ register: false, login: false });
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleTextChange = useCallback((value) => {
        setPhoneNumber(value);
    }, []);

    const handleSelectedCountry = useCallback((value) => {
        console.log("entring data", value);
    }, []);

    const handlePhoneLogin = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Register</Text>
                <Text style={styles.subHeading}>Enter your phone number to receive OTP.</Text>
            </View>
            <View style={styles.content}>
                <Input marginBottom={10} placeholder="Enter your phone number" keyboard="numeric" onChangeText={handleTextChange} />
                <Button label="Continue" type="primary" onPress={handlePhoneLogin} />
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;