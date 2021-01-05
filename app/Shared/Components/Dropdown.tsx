import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../Constants/Colors';
import FONTS from '../../Constants/Fonts';
import Values from '../../Constants/Values';


interface SelectorProps {
    data?: any[],
    onSelected?: any,
}

const styles = StyleSheet.create({
    dropdownWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderColor: COLORS.Light,
        borderRadius: 30,
        marginBottom: 15,
    },
    selectedText: {
        fontFamily: FONTS.Primary,
        fontSize: 16,
        color: COLORS.Primary
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,.4)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        elevation: 5,
        height: '100%',
        minHeight: 300,
        maxHeight: 500,
        width: Values.screenWidth - 40,
        overflow: 'hidden'
    },
    openButton: {
        backgroundColor: COLORS.Primary,
        padding: 10,
        elevation: 2,
        width: '100%'
    },
    textStyle: {
        color: COLORS.Light,
        textAlign: "center",
        fontFamily: FONTS.Primary
    },
    modalText: {
        marginBottom: 5,
        textAlign: "center",
        fontFamily: FONTS.Primary,
        fontSize: 22,
        paddingVertical: 10
    },
    listItem: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: .5,
        paddingHorizontal: 20,
        borderColor: COLORS.Light
    },
    listItemText: {
        fontFamily: FONTS.Primary,
        fontSize: 16,
    },
    searchInput: {
        width: '100%',
        borderBottomWidth: .5,
        height: 40,
        marginBottom: 5,
        fontSize: 18,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        fontFamily: FONTS.Primary
    }
})

const Selector = (props: SelectorProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ name: 'India', flag: 'https://restcountries.eu/data/ind.svg', callingCodes: ["91"] });
    const [filteredCountry, setFilteredCountry] = useState(props.data);
    const handleSearch = (value: any) => {
        const formattedQuery = value.toLowerCase()
        const data = props.data?.filter((value: any) => value.name.toLowerCase().includes(formattedQuery));
        setFilteredCountry(data);
    }

    useEffect(() => {
        setFilteredCountry(props.data);
    }, [modalVisible])

    useEffect(() => {
        setIsMounted(true)

        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
        <>
            {
                isMounted
                    ? <View>
                        <Pressable style={({ pressed }) => [styles.dropdownWrapper, { transform: [{ scale: pressed ? .98 : 1 }] }]} onPress={() => setModalVisible(true)}>
                            <SvgUri uri={selectedCountry.flag} width={20} height={20} />
                            <Text style={styles.selectedText}>{selectedCountry.name}(+{selectedCountry.callingCodes[0]})</Text>
                            <Icon name="chevron-down" size={20} color={COLORS.Primary} />
                        </Pressable>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(false)
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Select you country</Text>
                                    <TextInput placeholder="Search your country" style={styles.searchInput} onChangeText={(value: any) => handleSearch(value)} />
                                    <FlatList
                                        data={filteredCountry}
                                        style={{ flex: 1, width: "100%" }}
                                        keyExtractor={(item: any) => item.name}
                                        initialNumToRender={10}
                                        renderItem={({ item }) => {
                                            return <Pressable android_ripple={{ color: 'lightgrey' }} style={() => [styles.listItem]} onPress={() => {
                                                props.onSelected(selectedCountry);
                                                setSelectedCountry(item)
                                                setModalVisible(!modalVisible);
                                            }} >
                                                <Text numberOfLines={1} style={styles.listItemText}>{item.name}({item.callingCodes[0]})</Text>
                                            </Pressable>
                                        }}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                    : null
            }
        </>

    )
}


export default Selector;