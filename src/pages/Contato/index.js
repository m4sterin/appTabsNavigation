import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Contato() {
    return(
        <View style={styles.container}>
            <Text><strong>Endereco de contato:</strong></Text>
            <Text>E-mail: xesque@yume.com.br</Text>
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