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
					<Button style={styles.button} textStyle={{fontSize: 16}}>
	  					Im interested!
					</Button>
				</View>
      </View>
    );
  }
}

export default PostView;
