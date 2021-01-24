import React from 'react'
import { View, Text, Animated } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import FONTS from '../../../Constants/Fonts';
import Values from '../../../Constants/Values';
import CreditCard from '../../../Shared/Components/CreditCard';
import { styles } from './MyCardTransactionsStyles';
const MyCardTransactionsScreen = ({ route }: any) => {
    const { item } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontFamily: FONTS.Secondary, fontSize: 22 }}>Card Transactions</Text>
            </View>
            <SharedElement id={"cardNo-" + item.cardNo} >
                <CreditCard
                    name={item.name}
                    cardNo={item.cardNo}
                    gradient={item.gradient}
                    cvv={item.cvv}
                    type={item.type}
                />
            </SharedElement>
        </View>
    )
}
MyCardTransactionsScreen.sharedElements = (route: any, otherRoute: any, showing: any) => {
    const { item } = route.params;
    return ["cardNo-" + item.cardNo];
};
export default MyCardTransactionsScreen;
