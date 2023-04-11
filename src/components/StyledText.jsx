import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js';

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.colorPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        alignContent: 'center'
    }
});

export default function StyledText ({align, color, children, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        /*
        blue && styles.blue, //si la variable blue es verdadera (es decir, no es falsa, undefined, null, 0, etc.), entonces también se agregará el estilo styles.blue a la matriz de estilos. De lo contrario, no se agregará nada.
        big && styles.big, 
        small && styles.small, 
        bold && styles.bold, */
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold'&& styles.bold,
        align == 'center' && styles.textAlignCenter,
        style
    ];
    
    return (
        <Text style= {textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}