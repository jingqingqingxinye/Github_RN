/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WelcomePage from './js/page/WelcomPage';
import FirstPage from './js/page/FirstPage';
import PopularPage from './js/page/PopularPage';
import AppNavigator from './js/navigator/AppNavigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
