import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export class TitleTextInput extends PureComponent {
    onChaneEmail = text => {
        const { store } = this.props;
        store.setTitle(text)
    }
    render(){
        return(
            <TextInput style={styles.textInput} label='Title' onChangeText={this.onChaneEmail} />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 51,
        fontSize: 13
    },
  });