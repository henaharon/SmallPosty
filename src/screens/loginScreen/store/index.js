import { observable, action, flow, computed } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { loginRequest } from '../../../routes/login';
import { validateEmail } from './logic/validateEmail';

export class StoreLoginScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email;
  @observable password;
  @observable errorMsg = null;
  @observable loading;


  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }
  
  @action
  signInPressed = flow(function*(navigation) {
      let loginData = { email:this.email, password:this.password };
      try {
          if(!this.email || !this.password) {
              this.errorMsg = 'Empty Fields.';
          }
            if(this.email && this.password)
            {
                if(validateEmail(this.email)) {
                    const response = yield loginRequest(loginData);
                    if(!response.res){
                        this.errorMsg = response.msg;
              }
                    if(response.res && response.data){
                        this.rootStore.isLoading = true;    
                        navigation.navigate('Loading')                    
                        yield AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
                        this.rootStore.setUserInfo(response.data);
                        this.rootStore.isLoading = false;    
                    }
                }
                else {
                    this.errorMsg = 'Enter Valid Email.';
                }
              
            }

      }
    catch (e) {
            console.log("catch", e);
      }
      

              
  });
}