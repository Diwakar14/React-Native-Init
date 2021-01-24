import React, { memo } from 'react'
import { Animated, View, Text, StyleSheet, Image } from 'react-native'
import Svg, { Defs, LinearGradient, Stop, Ellipse, Rect } from 'react-native-svg';
import FONTS from '../../Constants/Fonts';
import Values from '../../Constants/Values';
import StyleUtils from '../Properties/StyleUtils';

interface CreditCardProps {
    id?: string,
    cardNo?: number,
    cvv?: number,
    name?: string,
    type?: any,
    amount?: number,
    gradient?: any,
    styles?: any,
    contentStyles?: any
}

const CreditCard = (props: CreditCardProps) => {

    const cc_format = (value: any) => {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

    return (
        <Animated.View style={[styles.card, props.styles, { backgroundColor: props.gradient.color1 }]}>
            <View style={[styles.cardView, props.contentStyles]}>
                <Text style={styles.cardHeading}>Credit Card</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                    {/* <Image source={require('../../../assets/img/card/card-chip.png')} style={{ width: 40, height: 40 }} /> */}
                    <Text style={styles.cardNo}>{cc_format(props.cardNo?.toString())}</Text>
                </View>
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.cardHolderName}>Card Holder Name</Text>
                        <Text style={styles.cardName}>{props.name}</Text>
                    </View>
                    <Image source={props.type} style={{ width: 50, height: 50 }} />
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: Values.screenWidth * .9,
        height: Values.screenHeight * .35,
        borderRadius: 12,
        margin: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    gradient: {
        width: Values.screenWidth * .8,
        height: Values.screenHeight * .6,
    },
    cardView: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: Values.screenWidth * .9,
        height: Values.screenHeight * .35,
    },
    cardHolderName: {
        fontFamily: FONTS.Secondary,
        fontSize: 14,
        color: '#ccc',
        textTransform: 'uppercase'
    },
    cardHeading: {
        fontFamily: FONTS.Secondary,
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        padding: 15
    },
    cardName: {
        fontFamily: FONTS.Secondary,
        fontSize: 18,
        color: 'white'
    },
    cardNo: {
        fontFamily: FONTS.Secondary,
        fontSize: 18,
        color: 'white',
        letterSpacing: 1
    },
    footer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        position: 'absolute'
    }
});

export default CreditCard;


