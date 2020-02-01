import React, { Component } from 'react';
import { inject, Provider as MobxProvider, observer } from 'mobx-react';
import { Base } from '../../components/ui/Base';
import { Header } from './components/header';
import { StoreDashboardScreen } from './store/index';
import { PostsListView } from './components/postsListView';
import { SortButton } from './components/sortButton';
@inject('rootStore')@observer
export class DashboardScreen extends Component {
    constructor(props) {
      super(props);
      this.storeDashboardScreen = new StoreDashboardScreen(props.rootStore);
    }
  
    async componentDidMount() {
      await this.storeDashboardScreen.getAllPosts();
      await this.storeDashboardScreen.getFollowersById();
      this._onFocusListener = this.props.navigation.addListener('didFocus', async() => {
        await this.storeDashboardScreen.getAllPosts();
      })
      this._onFocusListener = this.props.navigation.addListener('willBlur', () => {
        this.storeDashboardScreen.setIsSortMenuOpen(false);
      })
    }
    render() {
      return (
        <MobxProvider storeDashboardScreen={this.storeDashboardScreen}>
          <Base color={'#ebeded'}>
            <Header navigation={this.props.navigation} />
            <SortButton />
            <PostsListView />
          </Base>
        </MobxProvider>
      );
    }
  }

