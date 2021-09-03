import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { theme } from '../../theme/theme';
import MIcon from "react-native-vector-icons/MaterialIcons";

const TI = ({ description, iconName, ...props }) => {
    return (
        <View style={styles.container}>

            <View>
                <MIcon
                    name="search"
                    size={30}
                    color={theme.colors.silver}
                />
            </View>
            <View style={{ width: '80%' }}>

                <TextInput
                    style={styles.Input}
                    placeholderTextColor={theme.colors.silver}
                    placeholder='Test'
                    {...props}
                />
            </View>

        </View>
    )
}

export default TI

const styles = StyleSheet.create({
    container: { backgroundColor: 'white', borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignItems: 'center', height: 50, },
    Input: { paddingHorizontal: 15, paddingVertical: 20, backgroundColor: 'white', width: '100%' }

})
