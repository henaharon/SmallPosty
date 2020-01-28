import { observable, action, flow } from 'mobx';
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
                    if(response.res){
                        yield AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
                        navigation.navigate('App')
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