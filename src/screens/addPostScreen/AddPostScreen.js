import React, { Component } from 'react';
import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import { StatusBar } from 'react-native';
import { Base } from '../../components/ui/Base';
import { VerticalSpace } from '../../components/ui/VerticalSpace';
import { UploadArea } from './components/uploadArea';
import { TitleTextInput } from './components/titleTextInput';
import { AddPostButton } from './components/addPostButton';
import { StoreAddImageScreen } from './store/index';
import { UploadFailedDialog } from './components/uploadFailedDialog';
import { UploadPhotoView } from './components/uploadPhotoView';

@inject('rootStore')@observer
export class AddPostScreen extends Component {
  constructor(props) {
    super(props);
    this.storeAddImageScreen = new StoreAddImageScreen(props.rootStore);
  }
  onChangeTitleText = title => {
    this.storeAddImageScreen.setTitle(title);
  }


render() {
    return (
      <MobxProvider storeAddImageScreen={this.storeAddImageScreen}>
      <Base color={'#00adb5'}>
        <StatusBar barStyle="default" />
        <UploadArea>
          <VerticalSpace height={20} />
            <TitleTextInput store={this.storeAddImageScreen} />
            <VerticalSpace height={20} />
            <UploadPhotoView />
          <AddPostButton navigation={this.props.navigation} onPress={null}/>
        </UploadArea>
      </Base>
      <UploadFailedDialog />
      </MobxProvider>
    );
  }
}
