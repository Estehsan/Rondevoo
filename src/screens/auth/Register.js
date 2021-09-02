import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Register = () => {
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text>Register</Text>


            <Text></Text>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Go To Register Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})
