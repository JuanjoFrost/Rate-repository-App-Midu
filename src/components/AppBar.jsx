import React from "react";

import { ViewPropTypes, StyleSheet, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import StyledText from "./StyledText";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    scroll: {
        paddingBottom:15,
        paddingTop: 15,
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    active: {
        color: theme.appBar.textPrimary
    }
});

const AppBarTab = ({children, to}) => { // Cambia el nombre de la variable a isActive
    const {pathname} = useLocation();
    const active = pathname == to

    const textStyle = [
        styles.text,
        active && styles.active
    ];
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyle}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={[styles.scroll, styles.container]}> 
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/sign-in'>Sign-in</AppBarTab>
                <AppBarTab to='/otro'>Otro</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar;