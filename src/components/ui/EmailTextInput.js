import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export class EmailTextInput extends PureComponent {
    onChaneEmail = text => {
        const { store } = this.props;
        store.setEmail(text)
    }
    render(){
        return(
            <TextInput style={styles.textInput} label='Email' onChangeText={this.onChaneEmail} />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 51,
        fontSize: 13
    },
  });