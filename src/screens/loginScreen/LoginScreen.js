import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StatusBar,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Base } from '../../components/ui/Base';
import { Logo } from './components/Logo';
import { VerticalSpace } from '../../components/ui/VerticalSpace';
import { LoginArea } from './components/LoginArea';


export class LoginScreen extends Component {
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

  // Render any loading content that you like here
  render() {
    return (
      <Base color={'#00adb5'}>
        {/* <ActivityIndicator /> */}
        <StatusBar barStyle="default" />
        <LoginArea>
        <VerticalSpace height={45} />

        <Logo />
        <VerticalSpace height={45} />
        <TextInput style={{height: 51}} label='Email' />
        <VerticalSpace height={20} />
        <TextInput style={{height: 51}} label='Password' />
        <VerticalSpace height={30} />
        <Button color={'black'} mode="contained" onPress={() => console.log('Pressed')}>
    Sign In
  </Button>
  <VerticalSpace height={15} />

  <Button color={'white'} mode="contained" onPress={() => {this.props.navigation.navigate('Register');}}>
    Join
  </Button>
        </LoginArea>
        
      </Base>
    );
  }
}

// create general input