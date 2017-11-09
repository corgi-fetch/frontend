import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button';

const styles = StyleSheet.create ({
	container: {
		height: 320,
		padding: 28,
    justifyContent : 'flex-start',
	},
  rowContainer: {
    flex: 1,
		flexDirection: 'row',
		paddingBottom: 15,
  },
	text: {
    	fontSize: 20,
			paddingBottom: 15,
  },
  	PostTextInput: {
  		flex: 4,
  		height: 40,
  		borderColor: 'gray',
  		borderWidth: 1,
      //justifyContent : 'flex-start',
  	},
    RightTextInput: {
			width:200,
      borderColor: 'gray',
      borderWidth: 1,
			padding:10,
			paddingRight: 30,
    },

		LeftTextInput: {
			width: 90,
      borderColor: 'gray',
      borderWidth: 1,
			marginLeft: 25,
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
class AddPostView extends Component {
  static navigationOptions = {
    title: 'Add Post',
  };

	constructor(props) {
    	super(props);
    	this.state = {
        titleText: '',
        postText: '',
        priceText: '',
      };
  	}

		fetchData = () => {
	    const url = 'https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/user?userId=' + global.id;
	    fetch(url)
	      .then((response) => response.json())
	      .then((responseData) => {
	        global.user = responseData;
	        console.log(global.user);
	      })
	      .done();
	  }

	render() {
		const { navigate } = this.props.navigation;
		this.fetchData();
    return (
      <View style={styles.container}>
      	<Text style = {styles.text}>Add New Post</Text>
        <View style = {styles.rowContainer}>
          <TextInput style={styles.RightTextInput}
            value={this.state.titleText}
            onChangeText={(titleText) => this.setState({titleText})}
          />
					<TextInput style={styles.LeftTextInput}
            value={this.state.priceText}
            onChangeText={(priceText) => this.setState({priceText})}
          />
        </View>
        <TextInput style={styles.PostTextInput}
          multiline = {true}
          numberOfLines = {4}
          value={this.state.postText}
          onChangeText={(postText) => this.setState({postText})}
        />
				<View style = {styles.buttonContainer}>
					<Button style={styles.button} textStyle={{fontSize: 16}}
							onPress = {() => {
								fetch('https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/post', {
							  method: "post",
								credentials: 'include',
							  headers: {
							    'Accept': 'application/json',
							    'Content-Type': 'application/json'
							  },

							  //make sure to serialize your JSON body
							  body: JSON.stringify({
							    date: 7,
									owner: global.user,
							    title: this.state.titleText,
									description: this.state.postText,
									payment: this.state.priceText,
									interestedQueue: [],
									serviceGiven: false,
									serviceReceived: false,
							  })
							})
							.then( (response) => {
								console.log(response);
								this.fetchData();
								navigate('Home');
							   //do something awesome that makes the world a better place
							});
						}}>
						Create Post
					</Button>
				</View>
      </View>
    );
  }
}

export default AddPostView;
