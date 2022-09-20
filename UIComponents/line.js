import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const line = (props) => {

    let width, height

    if (props.horizontal) {
        width = '100%'
        height = 'auto'
    } else {
        width = 'auto'
        height = '100%'
    }

    const styles = StyleSheet.create({
        lineStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#aaa',
            width: width,
            height: height,
            borderWidth: 1.3,
            borderColor: '#aaa',
            margin: 4
        },
    });

    return (
        <View style={styles.lineStyle}>

        </View>
    )

}

export default line;