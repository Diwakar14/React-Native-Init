import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../../Constants/Colors';
import UserRole from '../../../Models/UserRoles';
import Button from '../../../Shared/Components/Button';
import { styles } from './RoleSelectScreenStyles';

const RoleSelectScreen = ({ navigation }: any) => {
    const [selectedRole, setSelectedRole] = useState({ id: '', role: '', icon: '' });

    const handleSelectRole = useCallback(() => {
        navigation.navigate('UserInfo');
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>I am</Text>
                <Text style={styles.subHeading}>Select you role of useage</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.listWrapper}>
                    {UserRole.map((item, index) => {
                        let customStyle = {
                            borderWidth: 1,
                            borderColor: selectedRole.id == item.id ? COLORS.Primary : COLORS.Light
                        }
                        return <Pressable key={item.id} style={[styles.block, { ...customStyle }]} onPress={() => {
                            setSelectedRole(item);
                        }}>
                            <Icon name={item.icon} size={22} color={COLORS.Heading} />
                            <Text style={styles.blockTitle}>{item.role}</Text>
                        </Pressable>
                    })}
                </View>
                <View style={styles.footer}>
                    <Button label="Select" type="primary" onPress={handleSelectRole} />
                </View>
            </View>

        </View>
    )
}

export default RoleSelectScreen;