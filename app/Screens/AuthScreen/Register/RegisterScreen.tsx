import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet } from 'react-native';
import { styles } from './RegisterScreenStyles';

const RegisterScreen = () => {
    const [isLoading, setIsLoading] = React.useState({ register: false, login: false });
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);



    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}

export default RegisterScreen;