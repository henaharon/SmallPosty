import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Entypo'
import { DashboardScreen } from './src/screens/dashboardScreen/DashboardScreen';
import { ProfileScreen } from './src/screens/profileScreen/ProfileScreen';
import { AuthLoadingScreen } from './src/screens/authScreen/AuthLoadingScreen';
import { LoginScreen } from './src/screens/loginScreen/LoginScreen';
import { RegisterScreen } from './src/screens/registerScreen/RegisterScreen';
import { AddPostScreen } from './src/screens/addPostScreen/AddPostScreen';
import { LoadingScreen } from './src/screens/loadingScreen.js/loadingScreen';

const DashboardScreenStack = createStackNavigator({
  DashboardStack: {
    screen: DashboardScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  AddPost: { 
    screen: AddPostScreen, 
    navigationOptions: {
      headerShown: true,
      headerTitle: 'ADD POST',
      headerStyle: {
        height: 40
      },
      headerTitleStyle: {
        fontSize: 15
      },
      headerTitleAlign: 'center',
  },
  }
});

DashboardScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const MainNavigator = createMaterialBottomTabNavigator(
{
    ProfileScreen: { 
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => <Icon name="user" size={25} color={tintColor} /> 
      }
  },
    DashboardScreen: { 
      screen: DashboardScreenStack,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({tintColor}) => <Icon name="clipboard" size={25} color={tintColor} /> ,
      } 
  },
},
{
    initialRouteName: 'DashboardScreen',
    activeColor: '#00adb5',
    inactiveColor: 'black',
    barStyle: { backgroundColor: '#fdffff' },
    shifting: true,
},
{
  headerLayoutPreset: 'center'
}
)

const AuthStack = createStackNavigator(
    { Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        },
    }, 
        Register: {
          screen: RegisterScreen ,
          navigationOptions: {
            headerShown: true,
            headerTitle: 'JOIN',
            headerStyle: {
              height: 40
            },
            headerTitleStyle: {
              fontSize: 15
            },
            headerTitleAlign: 'center'
        },
        },
        Loading : {
          screen: LoadingScreen,
          navigationOptions: {
            headerShown: false,
          }
        }
    });


const App = createAppContainer(
    createAnimatedSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: MainNavigator,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );

export default App

