import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import { Base } from '../../components/ui/Base';
import { Logo } from './components/Logo';
import { VerticalSpace } from '../../components/ui/VerticalSpace';
import { LoginArea } from './components/LoginArea';
import { EmailTextInput } from '../../components/ui/EmailTextInput';
import { PasswordTextInput } from '../../components/ui/PasswordTextInput';
import { SignInButton } from './components/SignInButton';
import { JoinButton } from './components/JoinButton';
import { StoreLoginScreen } from './store';
import { ErrorMsg } from '../../components/ui/errorMsg';

@inject('rootStore')@observer
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.storeLoginScreen = new StoreLoginScreen(props.rootStore);
  }

  onChangeEmailText = text => {
    this.storeLoginScreen.setEmail(text);
  }

  onChangePaswordText = text => {
    this.storeLoginScreen.setPassword(text);

  }
  render() {
    return (
      <MobxProvider storeLoginScreen={this.storeLoginScreen}>
      <Base color={'#00adb5'}>
        <StatusBar barStyle="default" />
        <LoginArea>
          <VerticalSpace height={45} />
          <Logo />
          <VerticalSpace height={45} />
          <EmailTextInput store={this.storeLoginScreen} />
          <VerticalSpace height={20} />
          <PasswordTextInput store={this.storeLoginScreen} />
          <ErrorMsg height={50} store={this.storeLoginScreen} />
          <SignInButton navigation={this.props.navigation} />
          <VerticalSpace height={15} />
          <JoinButton navigation={this.props.navigation} />
        </LoginArea>
      </Base>
      </MobxProvider>

    );
  }
}
