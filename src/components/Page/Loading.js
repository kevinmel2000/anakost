import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet} from 'react-native'

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Mohon Tunggu</Text>
                
                <ActivityIndicator
                    size={50}
                    color="#cf0e04"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title : {
        fontSize: 28,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 15,
        textAlign: 'center',
    }
});