import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

@inject('storeAddImageScreen')@observer
export class UploadFailedDialog extends Component {

  hideDialog = () => this.props.storeAddImageScreen.setIsUploadFailedDialogVisible(false);

  render() {
      const { isUploadFailedDialogVisible } = this.props.storeAddImageScreen;      
    return (
      <View>
        <Portal>
          <Dialog
             visible={isUploadFailedDialogVisible}
             onDismiss={this.hideDialog}>
            <Dialog.Title style={styles.title}>Image upload failed, try again</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={this.hideDialog}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'right'
  },
});