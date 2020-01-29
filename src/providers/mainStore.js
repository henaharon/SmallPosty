import { observable, action } from 'mobx';

class mainStore {
    @observable userToken;
    @observable userId;
    @observable userEmail;
    @observable loading = true;

    @action
    setUserInfo(info){
        this.userToken = info.token;
        this.userId = info.user_id;        
        this.userEmail = info.email;
    }     
    @action loadingCompleted() {
        this.loading = false;
    }

    @action toggleLoading() {
        this.loading = this.loading ? false : true;
    }
}

export default new mainStore();