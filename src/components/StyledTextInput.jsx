import React from "react";
import { StyleSheet, TextInput } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    error: {
        borderColor: 'red'
    }
});

const StyledTextInput = ({ style={}, error, ...props}) => {
    const inputStyle =[
        styles.TextInput,
        style,
        error && styles.error
    ]

    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput;