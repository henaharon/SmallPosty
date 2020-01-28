import { observable, action, flow, computed } from 'mobx';

export class StoreDashboardScreen {
  constructor(store) {
    this.store = store;
  }

  @observable isModalZoomPostOpen;
  @observable postsArray = [];


//   @action
//   setIsModalZoomPostOpen(isOpen) {
//     this.isModalZoomPostOpen = isOpen;
//   }

//   @action
//   getScreenData = flow(function*() {
//   });
}