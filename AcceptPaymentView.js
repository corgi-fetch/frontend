import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RatingStar from './RatingStar';
import Button from 'apsl-react-native-button';

const styles = StyleSheet.create ({
  columnContainer: {
    flex: 2,
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
  updateContainer: {
    marginLeft: 15,
    width: 320,
    height: 23,
    backgroundColor: 'blue',
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
  topButtonContainer: {
    alignSelf: 'flex-end',
    paddingTop: 10,
  },
  ratingsContainer: {
    flex: 1,
    marginTop : 50,
    alignSelf: 'center',
    marginBottom: 170,
  },
  buttonContainer: {
		alignSelf: 'flex-end'
	},
	button: {
		height: 30,
		width: 120,
    backgroundColor:'#00BCD4',
    borderWidth: 1,
    borderColor: '#fff'
	},
});
class AcceptPaymentView extends Component {

  constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
      //   name: props.navigation.state.params.name,
      //   starCount: props.navigation.state.params.starCount,
      //   price: props.navigation.state.params.price,
      //   postTitle: props.navigation.state.params.postTitle,
      //   postInfo: props.navigation.state.params.postDescription,
      };
  }

  static navigationOptions = ({navigation}) => ({
    //title: navigation.state.params.name,
    //PostView.setPostInfo(navigation.state.params.name);
  });

	render() {
    return (
      <View style = {{flex: 1}}>
        <View style={styles.columnContainer}>
  				<View style = {styles.contentContainer}>
  	        <View style = {styles.rowContainer}>
  	          <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
  	      	  <Text style = {styles.text}>
  	            Daniel Zhang
  	          </Text>
  	          <RatingStar starCount = {5}
                          starSize = {25}
                          />
  	        </View>
  	        <Text style = {styles.titleText}>
  	          Can someone get me food?
  	        </Text>
  	        <Text style = {styles.text}>
              Hey Im stuck on campus and Im really hungry. Can anyone get me food, and bring it to Wheeler Hall between 1 and 3?
  	        </Text>
  	        <Text style = {styles.priceText}>
  	          5
  	        </Text>
  				</View>
  				<View style = {styles.updateContainer}>
  	         <Text style = {{paddingLeft: 10}}>
             Three people are interested
             </Text>
  				</View>
          <View style = {styles.updateContainer}>
            <Text style = {{paddingLeft: 10}}>
            Daniel Zhang chose you!
            </Text>
          </View>
          <View style = {styles.updateContainer}>
            <Text style = {{paddingLeft: 10}}>
            Daniel Zhang paid you!
            </Text>
          </View>
          <View style = {styles.topButtonContainer}>
  					<Button style={styles.button} textStyle={{fontSize: 14}}>
  	  					Accept Payment
  					</Button>
  				</View>
          <View style = {styles.ratingsContainer}>
            <RatingStar starSize = {50}/>
            <Text style = {{fontSize: 14}}>  Rate Daniel for this Transaction!</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default AcceptPaymentView;
