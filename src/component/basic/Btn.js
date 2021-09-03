import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Heading from './Heading';

const Btn = () => {
    return (
        <View style={styles.Btn}>
            <Heading>Sign Up</Heading>
        </View>
    );
};

export default Btn;

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: '#FD3E3E',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
    },
});
