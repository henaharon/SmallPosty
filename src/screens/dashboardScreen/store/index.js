import { observable, action, flow } from 'mobx';
import { getAllPost, deletePostByID } from '../../../routes/post';
import { getFollowersById, addFollower } from '../../../routes/follower';
import { NEWEST, OLDEST, FOLLOWED, UNFOLLOWED } from './sortMethodConsts';
export class StoreDashboardScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable postsArray = [];
  @observable iFollowArray = [];
  @observable iFollowArrayByUserId = [];
  @observable isSortMenuOpen;
  @observable sortMethod = NEWEST;

  @action
  setIsSortMenuOpen(isOpen){
    this.isSortMenuOpen = isOpen;
  }

  @action
  followRoutine = flow(function*(user_id){
    try{
      const response = yield addFollower(this.rootStore.userToken, user_id);
      if(response.res){
        this.getFollowersById();
      }
    }
    catch(e){
      console.log("followRoutine catch",e);

    }
  });

  @action
  getFollowersById = flow(function*(){
    try {
      const response = yield getFollowersById(this.rootStore.userToken);
      if(response.res){
        this.iFollowArray = response.data;
        this.iFollowArrayByUserId = response.data.map(obj => obj.f_user_id);
      }
      else {
        console.log("getFollowersById faild",response.error);
        
      }
    }
    catch(e){
      console.log("getFollowersById catch",e);

    }
    
  });

  @action
  getAllPosts = flow(function*() {    
    try{
      const response = yield getAllPost(this.rootStore.userToken);
      if(response.res){
        const postsFromServer = response.data;
        this.postsArray = postsFromServer.sort((a,b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      }
    }
    catch(e){
      console.log("getAllPosts catch",e);
      
    }    
  });

  @action
  sortByNewest(){
    this.sortMethod = NEWEST;
    this.isSortMenuOpen = false;
    this.postsArray = this.postsArray.slice().sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });  
  }

  @action
  sortByOldest(){
    this.sortMethod = OLDEST;
    this.isSortMenuOpen = false;
    this.postsArray = this.postsArray.slice().sort((a,b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    });    }

  @action
  sortByFollowed(){
    this.sortMethod = FOLLOWED;
    this.isSortMenuOpen = false;
    let postsArrayCopy = this.postsArray.slice();
    let iFollowArrayByUserIdCopy = this.iFollowArrayByUserId.slice();
    const sortedPosts = postsArrayCopy.sort(function(a, b){  
      return iFollowArrayByUserIdCopy.indexOf(b.user_id) - iFollowArrayByUserIdCopy.indexOf(a.user_id);
    });
    this.postsArray = sortedPosts;
  }

  @action
  sortByUnfollowed(){
    this.sortMethod = UNFOLLOWED;
    this.isSortMenuOpen = false;
    let postsArrayCopy = this.postsArray.slice();
    let iFollowArrayByUserIdCopy = this.iFollowArrayByUserId.slice();
    iFollowArrayByUserIdCopy.push(this.rootStore.userId);
    const sortedPosts = postsArrayCopy.sort(function(a, b){  
      return iFollowArrayByUserIdCopy.indexOf(a.user_id) - iFollowArrayByUserIdCopy.indexOf(b.user_id);
    });
    this.postsArray = sortedPosts;
  }

  @action
  deletePost = flow(function*(post_id) {
    try{
      yield deletePostByID(this.rootStore.userToken, post_id);
      const postsArrayAfterRemovePost = this.postsArray.slice().filter(obj => obj.user_id != this.rootStore.userId);
      this.postsArray = postsArrayAfterRemovePost;
    }
    catch(e){
      console.log("deletePost catch",e);
 
    }
  })
}