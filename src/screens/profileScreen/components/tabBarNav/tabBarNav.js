import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBarButton } from './components/tabBarButton';


export class TabBarNav extends Component {

    render(){
        return (
            <View style={styles.tabBar}>
                <TabBarButton tabNum={1} tabTitle={'Followers'} listController={this.props.listController} />
                <TabBarButton tabNum={2} tabTitle={'Following'} listController={this.props.listController} />
                <TabBarButton icon tabNum={3} tabTitle={'Posts'} listController={this.props.listController} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10,

    },
  });