import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo'
import { Header } from '../dashboardScreen/components/Header';
// import { inject, observer, Provider as MobxProvider } from 'mobx-react';

export class ProfileScreen extends Component {
    constructor(props) {
      super(props);
    //   this.storeDashboardScreen = new StoreDashboardScreen(props.rootStore);
    }

    static navigationOptions = () => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#ffffff'
      },
      tabBarIcon: () => <Icon name="user" size={20} color="#ffffff" />
    })
  
    // async componentDidMount() {
    //   await this.storeDashboardScreen.getScreenData();
    // }
    render() {
      const SafeAreaViewStyle = {
        flex: 1,
      };
      return (
        // <MobxProvider storeDrawerNavigator={this.storeDrawerNavigator}>
          <SafeAreaView style={SafeAreaViewStyle}>
            <Header navigation={this.props.navigation} />
            <ScrollView>
                <Text>Profile</Text>
            </ScrollView>
          </SafeAreaView>
        // </MobxProvider>
      );
    }
  }