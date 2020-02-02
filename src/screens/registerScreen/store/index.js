import { observable, action, flow } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { registerRequest } from '../../../routes/register';
import { validateEmail } from '../../loginScreen/store/logic/validateEmail';
import { loginRequest } from '../../../routes/login';

export class StoreRegisterScreen {
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
  joinPressed = flow(function*(navigation) {
      let registerData = { email:this.email, password:this.password };
      try {
          if(!this.email || !this.password) {
              this.errorMsg = 'Empty Fields.';
          }
            if(this.email && validateEmail(this.email))
            {
                if(this.password && this.password.length >= 8) {
                    const response = yield registerRequest(registerData);
                    if(!response.res){
                        this.errorMsg = response.msg;
              }
                    if(response.res && response.data){
                      const response = yield loginRequest(registerData);
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
                }
                else {
                    this.errorMsg = 'Password must be at least 8 characters long.';
                }
              
            }
            else {
                this.errorMsg = 'Enter valid Email.'
            }
      }
    catch (e) {
            console.log("catch", e);
      }
      

              
  });
}