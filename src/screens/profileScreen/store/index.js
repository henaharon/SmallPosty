import { observable, action, flow, computed } from 'mobx';
import { getPostById } from '../../../routes/post';
import { getMyFollowers, getFollowersById } from '../../../routes/follower';

export class StoreProfileScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable myPostsArray = [];
  @observable followingArray = [];
  @observable followersArray = [];
  @observable tabNumSelected = 1;



  @action
  setTabNumSelected(tabNumSelected) {
    this.tabNumSelected = tabNumSelected;
  }

  @action
  getMyPosts = flow(function*() {
    const response = yield getPostById(this.rootStore.userToken, this.rootStore.userId);
    if(response.res){
      const postsFromServer = response.data;
      this.myPostsArray = postsFromServer.sort((a,b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      })
  }
})

@action
getMyFollowers = flow(function*(){
  try {
    const response = yield getMyFollowers(this.rootStore.userToken);
    if(response.res){
      this.followersArray = response.data;
    }
    else {
      console.log("getMyFollowers faild",response.error);
      
    }
  }
  catch(e){
    console.log("getMyFollowers catch",e);

  }
  
});

@action
getFollowersById = flow(function*(){
  try {
    const response = yield getFollowersById(this.rootStore.userToken);
    if(response.res){
      this.followingArray = response.data;
    }
    else {
      console.log("getFollowersById faild",response.error);
      
    }
  }
  catch(e){
    console.log("getFollowersById catch",e);

  }
  
});

}