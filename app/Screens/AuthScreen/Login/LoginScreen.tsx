import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { styles } from './LoginScreenStyles';

const LoginScreen = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.firstName && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="lastName"
                    defaultValue=""
                />

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;