import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Base } from '../../components/ui/Base';
import { Logo } from '../loginScreen/components/Logo';

@inject('rootStore')@observer
export class LoadingScreen extends PureComponent {
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkForLoading(),
            1000
          );
        
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      checkForLoading = async () => {
        const { isLoading } = this.props.rootStore;
        !isLoading ? this.props.navigation.navigate('App') : null;
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
