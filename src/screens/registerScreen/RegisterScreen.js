import React, { Component } from 'react';
import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import { StatusBar } from 'react-native';
import { Base } from '../../components/ui/Base';
import { VerticalSpace } from '../../components/ui/VerticalSpace';
import { RegisterArea } from './components/RegisterArea';
import { EmailTextInput } from '../../components/ui/EmailTextInput';
import { PasswordTextInput } from '../../components/ui/PasswordTextInput';
import { RegisterButton } from './components/RegisterButton';
import { StoreRegisterScreen } from './store/index';
import { ErrorMsg } from '../../components/ui/errorMsg';

@inject('rootStore')@observer
export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.storeRegisterScreen = new StoreRegisterScreen(props.rootStore);
  }
  onChangeEmailText = text => {
    this.storeRegisterScreen.setEmail(text);
  }

  onChangePaswordText = text => {
    this.storeRegisterScreen.setPassword(text);

  }
render() {
    return (
      <MobxProvider storeRegisterScreen={this.storeRegisterScreen}>
      <Base color={'#00adb5'}>
        <StatusBar barStyle="default" />
        <RegisterArea>
          <EmailTextInput store={this.storeRegisterScreen} />
          <VerticalSpace height={20} />
          <PasswordTextInput store={this.storeRegisterScreen} />
          <ErrorMsg height={50} store={this.storeRegisterScreen} />
          <RegisterButton navigation={this.props.navigation} onPress={null}/>
        </RegisterArea>
      </Base>
      </MobxProvider>
    );
  }
}
