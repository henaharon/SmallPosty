import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { Base } from '../../components/ui/Base';
import { Logo } from '../loginScreen/components/Logo';

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
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
