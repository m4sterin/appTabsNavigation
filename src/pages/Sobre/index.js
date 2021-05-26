import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Sobre() {
    return(
        <View style={styles.container}>
            <Text><strong>Somos da Yume Dev!</strong></Text>
            <Text>E o nosso sonho é ver seu sonho se realizar!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})