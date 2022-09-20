import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



class CounterShape extends Component {

    state = {
        inputNumber: this.props.num
    }

    styles = StyleSheet.create({
        counterContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#eeeeee',
            width: this.props.size,
            height: this.props.size,
            borderWidth: 0,
            borderBottomLeftRadius: (this.props.size / 2),
            borderBottomRightRadius: (this.props.size / 2),
            borderTopLeftRadius: (this.props.size / 2),
            borderTopRightRadius: (this.props.size / 2),
            margin: 5
        },
        searchInput: {
            width: '100%',
            paddingHorizontal: 10,
            fontSize: this.props.size / 3.2,
            color: 'black',
            fontWeight: 'bold',
        }
    });

    onChange = (inputVal) => {
        console.log(inputVal);
        this.state.inputNumber = inputVal
    }
    render() {

        return (
            <View style={this.styles.counterContainer} >
                <TextInput
                    value={this.state.inputNumber}
                    style={this.styles.searchInput}
                    keyboardType="numeric"
                    onChangeText={(value) => this.onChange(value)}
                    editable={this.props.Changeable}
                    textAlign='center'
                    maxLength={2}
                />
            </View>
        );
    }
}


export default CounterShape;