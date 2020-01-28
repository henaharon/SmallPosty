import { observable, action } from 'mobx';

class mainStore {
    @observable loading = true;

    @action loadingCompleted() {
        this.loading = false;
    }

    @action toggleLoading() {
        this.loading = this.loading ? false : true;
    }
}

export default new mainStore();