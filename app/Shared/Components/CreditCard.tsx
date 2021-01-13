import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface CreditCardProps {
    id?: string,
    cardNo?: number,
    cvv?: number,
    name?: string,
    type?: string,
    amount?: number,
    gradient?: any
}

const CreditCard = (props: CreditCardProps) => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CreditCard


