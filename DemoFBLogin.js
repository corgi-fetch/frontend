import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
} from 'react-native';

import FBSDK, { LoginManager } from 'react-native-fbsdk'

class DemoFBLogin extends Component {

   _fbAuth(){
     fetch('http://corgoapi-v2.azurewebsites.net/login/facebook')
   }

//     LoginManager.logInWithReadPermissions(['public_profile']).then(
//      function(result) {
//     if (result.isCancelled) {
//       alert('Login cancelled');
//     } else {
//       alert('Login success with permissions: '
//         +result.grantedPermissions.toString());
//     }
//   },
//   function(error) {
//     alert('Login fail with error: ' + error);
//   }
// );

  //}
  // <View style={styles.container}>
  //   <TouchableOpacity onPress={this._fbAuth}>
  //     <Text>Login Via FaceBook</Text>
  //   </TouchableOpacity>
  // </View>
  //https://corgoapi-v2.azurewebsites.net/login/facebook
  render() {
    return (
      <WebView
        source={{uri: 'http://corgoapi-v2.azurewebsites.net/login/facebook'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default DemoFBLogin;
