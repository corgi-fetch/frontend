import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RatingStar from './RatingStar';
import Button from 'apsl-react-native-button';

const styles = StyleSheet.create ({
  columnContainer: {
		paddingTop: 35,
		paddingLeft: 20,
		paddingRight: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
	contentContainer: {
		padding: 10,
		width: 335,
		borderColor: 'black',
		borderWidth: 2,
	},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
	text: {
    fontSize: 20,
  },
	buttonText: {
		fontSize: 15,
		paddingBottom: 10,
	},
	priceText: {
		paddingTop: 10,
		alignSelf: 'flex-end',
		fontSize: 20,
	},
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
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
});
class PostView extends Component {

/*
  setPostInfo = (username) => {
    this.setState ({
      name: username,
    });
  }
*/

  constructor(props) {
      super(props);
      this.state = {
        name: props.navigation.state.params.name,
        starCount: props.navigation.state.params.starCount,
        price: props.navigation.state.params.price,
        postTitle: props.navigation.state.params.postTitle,
        postInfo: props.navigation.state.params.postDescription,
        post: props.navigation.state.params.item,

      };
  }

  static navigationOptions = ({navigation}) => ({
    //title: navigation.state.params.name,
    //PostView.setPostInfo(navigation.state.params.name);
  });

	render() {
    return (
      <View style={styles.columnContainer}>
				<View style = {styles.contentContainer}>
	        <View style = {styles.rowContainer}>
	          <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
	      	  <Text style = {styles.text}>
	            {this.state.name}
	          </Text>
	          <RatingStar starCount = {this.state.starCount}
                        starSize = {25} />
	        </View>
	        <Text style = {styles.titleText}>
	          {this.state.postTitle}
	        </Text>
	        <Text style = {styles.text}>
	          {this.state.postInfo}
	        </Text>
	        <Text style = {styles.priceText}>
	          {this.state.price}
	        </Text>
				</View>
				<View style = {styles.buttonContainer}>
					<Button style={styles.button} textStyle={{fontSize: 16}}
          onPress = {() => {
            console.log('user object' + global.user.id);
            let userStub = {
              "id" : global.user.id,
              "rating": global.user.rating,
              "name": global.user.name,
            };

            if(this.state.post.interestedQueue == null) {
              this.state.post.interestedQueue = [];
            }
            console.log(JSON.stringify(global.user));
            fetch('https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/post/' + this.state.post.id, {
            method: "put",
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(global.user)
            // body: JSON.stringify({
            //   //date: 7,
            //   //owner: global.user,
            //   //title: this.state.postTitle,
            //   //description: this.state.postInfo,
            //   //payment: this.state.price,
            //   //interestedQueue: this.state.post.interestedQueue.push(global.user),
            //   //serviceGiven: false,
            //   //serviceReceived: false,
            //   id: global.user.id,
            //   rating: global.user.rating,
            //   name: global.user.name,
            //   email: global.user.email,
            //   userId: global.user.userId,
            //   postHistory: global.user.postHistory,
            //   currentPosts: global.user.currentPosts,
            //   currentJobs: global.user.currentJobs,
            //   creditCardNumber: global.user.creditCardNumber,
            //   bankAccount: global.user.bankAccount,
            //   groups: null,
            // })
          })
          .then( (response) => {
            console.log(response);
            this.fetchData();
            navigate('Home');
             //do something awesome that makes the world a better place
          });
        }}>
	  					Im interested!
					</Button>
				</View>
      </View>
    );
  }
}

export default PostView;
