import OTPInputView from '@twotalltotems/react-native-otp-input'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Value } from 'react-native-reanimated';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';
import Values from '../../Constants/Values';
import Button from './Button';

interface VerifyOTPProps {
    onChangeNumber?: any,
    onOTPVerify?: any
}


const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        color: COLORS.Primary,
        fontFamily: FONTS.Primary,
        fontSize: 22
    },

    underlineStyleHighLighted: {
        borderColor: COLORS.Primary,
    },
    steps: {
        width: Values.screenWidth,
        padding: 20
    }
});

const VerifyOTP = (props: VerifyOTPProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleChangeNumber = useCallback(() => {
        props.onChangeNumber();
    }, []);

    const handleVerifyOTP = useCallback(() => {
        props.onOTPVerify();
    }, []);


    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <View style={styles.steps}>
            {
                isMounted
                    ? <OTPInputView
                        style={{ width: '80%', height: 150, alignSelf: 'center' }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                    : null
            }

            <Button label="Verify OTP" type="primary" onPress={handleVerifyOTP} marginBottom={10} />
            <Button label="Change Number" icon="chevron-left" type="secondary" onPress={handleChangeNumber} />

        </View>
    )
}

export default memo(VerifyOTP);