import React, { PropTypes, Component } from 'react';
import {AppRegistry} from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
import {StackNavigator} from 'react-navigation';
import Timeline from './Timeline';
import SimpleApp from './Timeline';

class Login extends Component {
    render() {
    const { navigate } = this.props.navigation;
    var _this = this;
    return (
      <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
          console.log(data.credentials)
          navigate('NestedNav');
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
    );
  }
};

AppRegistry.registerComponent('Corgo', () => LoginNav);

const LoginNav = StackNavigator(
{
  Home: {screen: Login},
  NestedNav: {screen: SimpleApp},
},
{ headerMode: 'none'}
);

export default LoginNav;
