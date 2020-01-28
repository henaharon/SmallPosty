import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StatusBar
} from 'react-native';
import { Base } from '../../components/ui/Base';
import { Logo } from '../loginScreen/components/Logo';

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    let token = null;
    const userInfoString = await AsyncStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoString);    
    if(userInfo){
      token = userInfo.token;
    }
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
      <Base color={'#00adb5'}>
        <StatusBar barStyle="default" />
        <Logo />
      </Base>
    );
  }
}
