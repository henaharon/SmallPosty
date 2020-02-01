import React, { Component } from 'react';
import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import { Dimensions, Animated } from 'react-native';
import { Base } from '../../components/ui/Base';
import { Header } from './components/header';
import { StoreProfileScreen } from './store/index';
import { FollowersList } from './components/followersList';
import { FollowingList } from './components/followingList';
import { GridPostsView } from './components/gridPostsView';
import { TabBarNav } from './components/tabBarNav/tabBarNav';

const width =  Dimensions.get('window').width ;

@inject('rootStore')@observer
export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.storeProfileScreen = new StoreProfileScreen(props.rootStore);
    this.state = { listDisplayed: new Animated.Value(-width * 2) }
  }
    async componentDidMount() {
      await this.storeProfileScreen.getMyPosts();
      await this.storeProfileScreen.getMyFollowers();
      await this.storeProfileScreen.getFollowersById();
      this._onFocusListener = this.props.navigation.addListener('didFocus', async() => {
        await this.storeProfileScreen.getMyPosts();
      })
    }

    listController = listNum => {
      let Xvalue
      if (listNum === 1) Xvalue = 0 
      else if (listNum === 2) Xvalue = -width 
      else if (listNum === 3) Xvalue = -width * 2
       
      Animated.timing(this.state.listDisplayed, {
        toValue: Xvalue,
        duration: 200
      }).start()
    }

    render() {
      const { userEmail } = this.props.rootStore;
      return (
        <MobxProvider storeProfileScreen={this.storeProfileScreen}>
          <Base color={'#ebeded'}>
            <Header text={userEmail} navigation={this.props.navigation} />
            <TabBarNav listController={this.listController} />
            <Animated.View style={{ flex: 1, flexDirection: 'row', left: this.state.listDisplayed }}>
              <FollowersList />
              <FollowingList />
              <GridPostsView />
            </Animated.View>          
          </Base>
        </MobxProvider>
      );
    }
  }