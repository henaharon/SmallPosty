import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {  Divider } from 'react-native-paper';
import { inject, observer } from 'mobx-react';
import { SortListButton } from './components/sortListButton';

@inject('storeDashboardScreen')@observer
export class SortMenu extends Component {
  onPressNewest = () => {
    this.props.storeDashboardScreen.sortByNewest();
  }
  onPressOldest = () => {
    this.props.storeDashboardScreen.sortByOldest();
  }
  onPressFollowed = () => {
    this.props.storeDashboardScreen.sortByFollowed();
  }
  onPressUnfollowed = () => {
    this.props.storeDashboardScreen.sortByUnfollowed();
  }
  onPressMyPosts = () => {
    this.props.storeDashboardScreen.sortByMyPosts();
  }

  render() {
    return (
        <View style={styles.menuView}>
                <Divider style={styles.filterDividor} />
                <SortListButton onPress={this.onPressNewest} text={'Newest'} />
                <Divider style={styles.dividor} />
                <SortListButton onPress={this.onPressOldest} text={'Oldest'} />
                <Divider style={styles.dividor} />
                <SortListButton onPress={this.onPressFollowed} text={'Followed'} />
                <Divider style={styles.dividor} />
                <SortListButton onPress={this.onPressUnfollowed} text={'Unfollowed'} />
                <Divider style={styles.dividor} />
                <SortListButton onPress={this.onPressMyPosts} text={'My Posts'} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    menuView: {
        width: '100%',
    },
    dividor: {
        alignSelf: 'center',
        width: '85%'
    },
    filterDividor: {
       height: 1.5
    }

  });