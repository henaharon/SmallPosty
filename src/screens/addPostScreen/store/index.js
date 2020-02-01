import { observable, action, flow, computed } from 'mobx';
import { addPost } from '../../../routes/post';
import RNFS from 'react-native-fs';

export class StoreAddImageScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable imageToUpload;
  @observable imageTitle;
  @observable errorMsg;
  @observable isUploadFailedDialogVisible;

  @action
  setTitle(title) {
    this.imageTitle = title;
  }

  @action
  setImage(image) {
    this.errorMsg = null;
    this.imageToUpload = image;
    this.checkImageValidation();
  }

  @action
  setIsUploadFailedDialogVisible(isVisible) {
    this.isUploadFailedDialogVisible = isVisible;
  }

  @action
   checkImageValidation() {
    if(this.imageToUpload && this.imageTitle) {
        if(this.imageToUpload.width < 400 && this.imageToUpload.height < 400){
            return true;
        }
        else {
            this.errorMsg = "Maximum image size is 400X400 pixels";
            return false;
        }  
    }
    else {
        this.errorMsg = "Choose image and title";
        return false;
    }
  }

  @action
  addPost = flow(function*(navigation){
    try{
        if(this.checkImageValidation()) {
                let uriBase64;
                yield RNFS.readFile(this.imageToUpload.uri, 'base64')
                    .then(res =>{                        
                        uriBase64 = res;
                    });
                let imageData = { title:this.imageTitle, image_url: `data:image/png;base64,${uriBase64}` };
                const response = yield addPost(this.rootStore.userToken, imageData);
                if(response.res){
                    this.imageTitle = null;
                    this.imageToUpload = null;
                    navigation.goBack();


                }
                else {
                  this.isUploadFailedDialogVisible = true;
                }
        }
    }
    catch(e){
      console.log("addPost catch",e);

    }
  });

}