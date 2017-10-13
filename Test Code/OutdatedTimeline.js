import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  ListView,
  Image,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';
import data from './data';
import Navbar from './TimelineNavbar';
import RatingStar from './RatingStar';
import AddPostView from './AddPostView';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
  	flex: 1,
    padding: 7,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    //borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class Timeline extends React.Component {
  
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Timeline",
    headerRight: <Button title="AddPost" onPress={() =>{ navigation.navigate('AddPost'); }} />,
  });

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
   		<View style = {styles.container}>
	      <ListView
	      	style={styles.container}
	        dataSource={this.state.dataSource}
	        renderRow={(data) =><Row {...data} />}
	        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
	      />
	    </View>
    );
  }
}

const Row = (props) => (
	<View style = {styles.columnContainer}>
	  <View style={styles.rowContainer}>
	    <Image source={{uri: props.picture.large}} style={styles.photo} />
	    <Text style={styles.text}>
	      {`${props.name.first} ${props.name.last}`}
	    </Text>
	    <RatingStar />
	  </View>
	  <View style = {styles.container}>
	  	<Text style = {styles.text}>
	  		'This is where all the post details need to go, Like where to deliver, price,
	  		any special instructions about delivery etc.'
	  	</Text>
	  </View>
	</View>
);

const SimpleApp = StackNavigator({
  Home: { screen: Timeline},
  AddPost: { screen: AddPostView },
});

AppRegistry.registerComponent('Corgo', () => SimpleApp);
export default SimpleApp;