import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../../theme/theme';

const TInput = ({ errorText, description, iconName, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                maxLength={40}

            />
            {description && !errorText ? <Text>{description}</Text> : null}
            {errorText ? <Text>{errorText}</Text> : null}
        </View>
    );
};

export default TInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    input: {
        borderRadius: 100,
        backgroundColor: '#fff',
    },
});
