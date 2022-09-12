import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 5,
    },
});

class DateHeader extends Component {
    render() {
        return (
            <View style={styles.date}>
                <Text>{this.props.day} / {this.props.month} / {this.props.year} - {this.props.weekDay}</Text>
                <Text>^</Text>
            </View>
        );
    }
}

export default DateHeader;