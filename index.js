/**
 * @format
 */

import React, { Component } from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'mobx-react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';import App from './App';
import {name as appName} from './app.json';
import mainStore from './src/providers/mainStore';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00adb5',
    accent: '#f1c40f',
  },
};

class Application extends Component {
    render() {
      return (
        <Provider rootStore={mainStore}>
          <PaperProvider theme={theme}>
            <App />
          </PaperProvider>
        </Provider>
      )
    }
  }


AppRegistry.registerComponent(appName, () => Application);
