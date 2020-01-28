/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { DashboardScreen } from './src/screens/dashboardScreen/DashboardScreen';
import { ProfileScreen } from './src/screens/profileScreen/ProfileScreen';
import { AuthLoadingScreen } from './src/screens/authScreen/AuthLoadingScreen';
import { LoginScreen } from './src/screens/loginScreen/LoginScreen';
import { RegisterScreen } from './src/screens/registerScreen/RegisterScreen';


const MainNavigator = createMaterialBottomTabNavigator(
{
    ProfileScreen: { screen: ProfileScreen },
    DashboardScreen: { screen: DashboardScreen }
},
{
initialRouteName: 'DashboardScreen',
activeColor: '#f0edf6',
inactiveColor: '#3e2465',
barStyle: { backgroundColor: '#e5726d' }
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
            headerTitle: 'Join',
            headerStyle: {
              height: 40,
            },
            headerTitleAlign: 'center'
        },
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

