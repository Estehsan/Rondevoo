import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text>Login</Text>


            <Text></Text>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Go To Register Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
