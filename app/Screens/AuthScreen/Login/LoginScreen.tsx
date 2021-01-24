import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AuthContext } from '../../../AuthState/Context';
import Button from '../../../Shared/Components/Button';
import Input from '../../../Shared/Components/Input';
import { styles } from './LoginScreenStyles';


const LoginScreen = () => {
    const { AuthData, Login } = useContext(AuthContext) as any;
    const [isLoading, setIsLoading] = useState({ register: false, login: false, country: false });
    const [user, setUser] = useState({ username: String, password: String });


    const handlePasswordLogin = () => {
        console.log(user);
        Login({ isLoaded: true, token: 'adasd', name: 'Diwakar', role: 'admin' });
    }

    useEffect(() => {

        console.log(AuthData);
        return () => {
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Login</Text>
                <Text style={styles.subHeading}>Enter your username and password</Text>
            </View>
            <View style={styles.content}>
                <Input autoFocus={true} icon="user" limit={10} textAlign="left" placeholder="Username" keyboard="numeric" onChangeText={(value: any) => setUser({ ...user, username: value })} />
                <Input textAlign="left" icon="lock" type="password" placeholder="Password" keyboard="default" onChangeText={(value: any) => setUser({ ...user, password: value })} />
                <Button label="Continue" type="primary" onPress={handlePasswordLogin} />
                <Button label="Login with OTP" type="link" marginBottom={0} onPress={() => { }} />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;