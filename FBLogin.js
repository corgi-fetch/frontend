import React, { PropTypes, Component } from 'react';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class Login extends Component {
  render() {
    return (
      <FBLogin />
    );
  }
};
// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View, 
//   ListView,
//   Image,
//   TouchableOpacity,
//   Button,
//   TouchableHighlight,
// } from 'react-native';

// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginButton,
// } = FBSDK;
      
// var FBLogin = React.createClass({
//   render: function() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("Login failed with error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("Login was cancelled");
//               } else {
//                 alert("Login was successful with permissions: " + result.grantedPermissions)
//               }
//             }
//           }
//           onLogoutFinished={() => alert("User logged out")}/>
//       </View>
//     );
//   }
// });

// class MyApplication extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Welcome to the Facebook SDK for React Native!</Text>
//         <FBLogin />
//       </View>
//     );
//   }
// }

// export default FBLogin;