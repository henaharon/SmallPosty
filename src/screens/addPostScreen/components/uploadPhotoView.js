import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import { ErrorMsg } from '../../../components/ui/errorMsg';

@inject('storeAddImageScreen')@observer
export class UploadPhotoView extends PureComponent {

    handleChoosePhoto = () => {
        const options = {
            noData: true,
          }
          ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.props.storeAddImageScreen.setImage(response);
            }
          })
      }
  render() {
    const { imageToUpload } = this.props.storeAddImageScreen;
    return (
            <View style={styles.uploadView}>
                {imageToUpload && (
                    <Image source={{ uri: imageToUpload.uri }}
                            style={styles.photoStyle}
                    />)}
                <Button color={'white'} mode="contained" onPress={this.handleChoosePhoto}>
                    Choose Photo
                </Button>
                <ErrorMsg height={50} store={this.props.storeAddImageScreen} />
            </View>
        );
  }
}

const styles = StyleSheet.create({
    uploadView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'    
    },
    photoStyle: {
        marginBottom: 10, 
        width: 300, 
        height: 300    }
  });