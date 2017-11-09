import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  FlatList,
} from 'react-native';
import RatingStar from './RatingStar';
import {StackNavigator} from 'react-navigation';
import { List, ListItem } from "react-native-elements";
import Button from 'apsl-react-native-button';
//import CircleButton from 'react-native-circle-button';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
    paddingBottom : 50,
	},
	notifButtonContainer: {
		flex: 1,
		paddingTop: 50,
		paddingRight: 50,
		alignSelf: 'flex-end',
	},
	userContainer: {
		flex : 3,
		alignItems: 'center',
	},
	notificationContainer: {
		flex : 4,
    alignSelf: 'flex-start',
	},
  buttonContainer: {
		paddingTop: 10,
		alignSelf: "flex-end"
	},
	button: {
		height: 30,
		width: 120,
    backgroundColor:'#00BCD4',
    borderWidth: 1,
    borderColor: '#fff'
	},
	image: {
	   	height: 150,
    	borderRadius: 75,
    	width: 150,
	},
	text: {
    	fontSize: 25,
    	fontWeight: 'bold',
  	},
  	circleButton: {
  		width: 50,
  		height: 50,
  		borderRadius: 50,
  		backgroundColor: 'blue',
  	}
});

class UserProfile extends React.Component {
	static navigationOptions = {
    	title: 'User Profile',
  	};

	constructor(props) {
    	super(props);
	  	this.state = {
	      loading: false,
	      data: [],
	      page: 1,
	      seed: 1,
	      error: null,
	      refreshing: false,
	    };
  	}

  	componentDidMount() {
    //this.fetchUser();
    this.makeRemoteRequest();
  	}

  	_onPressButton() {
    	Alert.alert('You tapped the button!')
  	}

    _onPressesButton() {
      fetch('https://corgoapi-v2.azurewebsites.net/logout/', {
        method: 'POST',
      })
    }

    // fetchUser = () => {
    //   const userUrl = 'https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/user?userId=' + global.id;
    //   fetch(userUrl)
    //     .then((response) => response.json())
    //   	.then((responseData) => {
    //   	  global.user = responseData;
    //   	  console.log(global.user);
    //   	})
    //     .done();
    // }

  	makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  	};

	render() {
		return (
      <View style = {{flex: 1}}>
        <View style = {styles.container}>
          <View style = {styles.notifButtonContainer}>
            <TouchableHighlight onPress={this._onPressButton}>
                  <View style = {styles.circleButton}>
                  </View>
              </TouchableHighlight>
            </View>
          <View style = {styles.userContainer}>
            <Image style={styles.image} source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}}/>
            <Text style = {styles.text}>Whitney Harris</Text>
            <RatingStar starSize = {25}/>
          </View>
        </View>
        <View style = {{flex: 1}}>
          <List>
            <FlatList
                data={global.user.currentPosts}
                renderItem={({ item }) => (
                <ListItem
                  //roundAvatar
                  title={`${item.title}`}
                  subtitle={item.description}
                  //avatar={{ uri: item.picture.thumbnail }}
                />
                )}
            keyExtractor={item => item.email}
            />
          </List>
        </View>
      </View>
	   );
	  }
}

export default UserProfile;
