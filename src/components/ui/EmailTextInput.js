import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export class EmailTextInput extends PureComponent {
    render(){
        const { store } = this.props;
        return(
            <TextInput style={styles.textInput} label='Email' onChangeText={text => store.setEmail(text)} />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 51,
        fontSize: 13
    },
  });