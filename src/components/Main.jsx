import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Switch, Routes, NativeRouter } from "react-router-native";
import Login from "../pages/login";

const Main = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route path='/' exact element={<RepositoryList/>}/> //DE ESTA MANERA SE LLAMA A UN COMPONENTE DENTRO DE UNA RUTA
                <Route path='/sign-in' exact element=<Login/> />
            </Routes>
           
            </View>
        </NativeRouter>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    }

});

export default Main