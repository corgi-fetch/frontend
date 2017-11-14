/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Timeline from './Timeline';
import RatingStar from './RatingStar';
import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import ModalExample from './ModalExample';
import Login from './Login';
import PostView from './PostView';
import FlatListDemo from './FlatListDemo';
import PostInterested from './PostInterested';
import ConfirmJobView from './ConfirmJobView';
import ConfirmPaymentView from './ConfirmPaymentView';
import AcceptPaymentView from './AcceptPaymentView';
import DemoFBLogin from './DemoFBLogin';
import SimpleApp from './Timeline';
AppRegistry.registerComponent('Corgo', () => SimpleNav);

class SimpleLogin extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <WebView
        //const { navigate } = this.props.navigation;
        source={{uri: 'http://corgoapi-v2.azurewebsites.net/login/facebook'}}
        style={{marginTop: 20}}
        onNavigationStateChange={(e) => {
          console.log(e.url);
          const end_url = 'https://corgoapi-v2.azurewebsites.net/api/1230838117060267/post';
           //if(e.url.indexOf(end_url) > -1) {
             navigate('Timeline')
           //}
          /** put your comdition here based here and close webview.
          Like if(e.url.indexOf("end_url") > -1)
          Then close webview
           */
        }}
      />
    );
  }
}

const SimpleNav = StackNavigator({
  Home: {screen: SimpleLogin},
  Timeline: { screen: SimpleApp},
}
);
