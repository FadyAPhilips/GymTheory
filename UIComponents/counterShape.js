import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';



class CounterShape extends Component {

    state = {
        inputNumber: this.props.num
    }


    num = this.state.inputNumber.length > 2

    size = this.num ? 4.5 : 3.2


    styles = StyleSheet.create({
        counterContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#eeeeee',
            width: this.props.size,
            height: this.props.size,
            borderWidth: 0,
            borderRadius: (this.props.size / 2),
            margin: 5
        },
        searchInput: {
            width: '100%',
            paddingHorizontal: 10,
            fontSize: this.props.size / this.size,
            color: 'black',
            fontWeight: 'bold',
        }
    });

    onChange = (inputVal) => {
        this.setState({ inputNumber: inputVal })
    }

    endEditing = (v) => {
        this.props.changed(v.nativeEvent.text, this.props.index, this.props.type)
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
                    maxLength={this.props.maxLen}
                    onEndEditing={(value) => this.endEditing(value)}

                />
            </View>
        );
    }
}


export default CounterShape;