import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
        <View style= {{ paddingRight: 14 }}>
            <Image style={ styles.image } source={{ uri: props.ownerAvatarUrl }}/>
        </View>
        <View style={{ flex: 1 }}>
            <StyledText>id: {props.id}</StyledText>
            <StyledText color ='secondary' fontWeight='bold' fontSize='subheading'>{props.fullName}</StyledText>
            <StyledText>description: {props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id}  style = { styles.container }>
    <RepositoryItemHeader {...props}/>
    <RepositoryStats {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding:20, paddingVertical: 5
    },
    language: {
        padding:4,
        color: theme.colors.white,
        backgroundColor: Platform.select({ //ejemplo para cambiar color de componentes dependiendo si es android o ios
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default RepositoryItem;