import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../../Constants/Colors';
import Button from '../../../Shared/Components/Button';
import Input from '../../../Shared/Components/Input';
import { styles } from './UserInfoScreenStyles';

const UserInfoScreen = ({ navigation }: any) => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => {
        navigation.navigate('Home');
    };

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.heading}>Register</Text>
            <Text style={styles.subHeading}>Provide your basic information</Text>
        </View>
        <View style={styles.content}>
            <ScrollView style={{ flex: 1, height: '100%' }} keyboardDismissMode="interactive">
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input icon="user" onBlur={onBlur} error={errors.firstName} marginBottom={10} textAlign="left" value={value} placeholder="Name" onChangeText={(value: any) => onChange(value)} />
                    )}
                    name="firstName"
                    rules={{ required: true, pattern: /^[A-Za-z]+$/i, }}
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input icon="mail" error={errors.email} marginBottom={10} textAlign="left" value={value} placeholder="Email" onChangeText={(value: any) => onChange(value)} />
                    )}
                    name="email"
                    defaultValue=""
                    rules={{ required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i }}
                />

                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <Input icon="lock" error={errors.password} marginBottom={20} textAlign="left" value={value} placeholder="Password" onChangeText={(value: any) => onChange(value)} />
                    )}
                    name="password"
                    defaultValue=""
                    rules={{ required: true }}
                />

                <Button label="Continue" type="primary" onPress={handleSubmit(onSubmit)} />
            </ScrollView>
        </View>
    </View>
}
export default UserInfoScreen;
