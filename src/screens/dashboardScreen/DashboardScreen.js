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
import { Header } from './components/Header';
import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import { StoreDashboardScreen } from './store/index';

@inject('store')
export class DashboardScreen extends Component {
    constructor(props) {
      super(props);
      this.storeDashboardScreen = new StoreDashboardScreen(props.store);
    }

    static navigationOptions = () => ({
      title: 'Dashboard',
      headerStyle: {
        backgroundColor: '#ffffff'
      },
      tabBarIcon: () => <Icon name="clipboard" size={20} color="#ffffff" />
    })
  
    // async componentDidMount() {
    //   await this.storeDashboardScreen.getScreenData();
    // }
    render() {
      return (
        <MobxProvider storeDashboardScreen={this.storeDashboardScreen}>
          <SafeAreaView style={SafeAreaViewStyle}>
            <Header navigation={this.props.navigation} />
            <ScrollView>
                <Text>Dashboard</Text>
            </ScrollView>
          </SafeAreaView>
        </MobxProvider>
      );
    }
  }