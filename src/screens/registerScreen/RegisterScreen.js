import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Base } from '../../components/ui/Base';
import { VerticalSpace } from '../../components/ui/VerticalSpace';
import { RegisterArea } from './components/RegisterArea';

export class RegisterScreen extends Component {
//   componentDidMount() {
//     this._bootstrapAsync();
//   }

//   // Fetch the token from storage then navigate to our appropriate place
//   _bootstrapAsync = async () => {
//     const userToken = await AsyncStorage.getItem('userToken');

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//   };

// onPress for buttens - > pass to component //
render() {
    return (
      <Base color={'#00adb5'}>
        {/* <ActivityIndicator /> */}
        <StatusBar barStyle="default" />
        <RegisterArea>
        <TextInput style={{height: 51}} label='Email' />
        <VerticalSpace height={20} />
        <TextInput style={{height: 51}} label='Password' />
        <VerticalSpace height={30} />
        <Button color={'black'} mode="contained" onPress={() => console.log('Pressed')}>
    Register
  </Button>
        </RegisterArea>
        
      </Base>
    );
  }
}
