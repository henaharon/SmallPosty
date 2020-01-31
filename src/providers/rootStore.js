import { observable, action } from 'mobx';
import { StoreDashboardScreen } from '../screens/dashboardScreen/store';
import { StoreProfileScreen } from '../screens/profileScreen/store';
import { StoreLoginScreen } from '../screens/loginScreen/store';

class rootStore {
    constructor() {
        this.storeDashboardScreen = new StoreDashboardScreen(this)
        this.storeProfileScreen = new StoreProfileScreen(this)
        this.storeLoginScreen = new StoreLoginScreen(this)
    }

    @observable loading = false;
    @observable userToken;
    @observable userId;
    @observable userEmail;

    @action
    setUserInfo(info){        
        this.userToken = info.token;
        this.userId = info.user_id;        
        this.userEmail = info.email;        
    }
    
    @action
    setIsLoading(isLoading){
        this.isLoading = isLoading;
    }
}

export default new rootStore();