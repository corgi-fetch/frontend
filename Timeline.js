import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert} from "react-native";
import {StackNavigator} from 'react-navigation';
import { List, ListItem } from "react-native-elements";
import RatingStar from './RatingStar';
import AddPostView from './AddPostView';
import UserProfile from './UserProfile';
import PostView from './PostView';

//Home: { screen: Timeline},
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 2,
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flex: 1,
    //padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    //marginLeft: 2,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  buttonContainer: {
    flexDirection : 'row',
  },
});

class Timeline extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      // headerStyle: {
      //   backgroundColor: '#9FDDED',
      // },
    title: "Timeline",
    headerRight: <Button title ="Add Post" onPress={() =>{ navigation.navigate('AddPost'); }} />,
    headerLeft: <Button title = "User" onPress= {() => {navigation.navigate('UserProfile'); }}/>,
  });


  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      //page: 1,
      //seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData();
    //this.fetchUser();
    this.makeRemoteRequest();
  }

  fetchData = () => {
    const url = 'https://corgoapi-v2.azurewebsites.net/api/master/principal';
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        global.id = responseData;
        console.log(global.id);
      })
      .done();
  }

  makeRemoteRequest = () => {
    //const { page, seed } = this.state;
    const url = 'https://corgoapi-v2.azurewebsites.net/api/' + global.id + '/post';
    //const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: [...this.state.data, ...res],
          //data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log(error);
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.data);
    return (
        <FlatList
          style={{ margin: 0 }}
          data={this.state.data}
          renderItem={({ item }) =>
              <ListItem
                subtitle={
                  <TouchableOpacity
                    onPress={() =>
                      navigate('Post', {
                        item: item,
                        name : item.owner.name,
                        starCount : item.owner.rating,
                        price : item.payment,
                        postTitle : item.title,
                        postDescription : item.description,
                      })
                    }
                    underlayColor='black'
                  >
                    <View style = {styles.columnContainer}>
                      <View style={styles.rowContainer}>
                        <Image source={{uri: source= 'https://s-media-cache-ak0.pinimg.com/736x/60/aa/e4/60aae45858ab6ce9dc5b33cc2e69baf7--martin-schoeller-character-inspiration.jpg'}} style={styles.photo} />
                        <Text style={styles.text}>
                           {`${item.owner.name}`}
                        </Text>
                        <RatingStar starCount = {item.owner.rating}
                                    starSize = {25}/>
                      </View>
                      <View style={styles.rowContainer} >
                        <Text style = {styles.titleText}>
                          {`${item.title}`}
                        </Text>
                        <View style = {styles.priceContainer} >
                          <Text style= {styles.text}>
                            {`${item.payment}`}
                          </Text>
                        </View>
                      </View>
                      <View style = {styles.container}>
                        <Text style = {styles.text}>
                          {`${item.description}`}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                }
              />
           }
        keyExtractor={item => item.id}
        />
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: Timeline},
  AddPost: { screen: AddPostView },
  UserProfile: {screen: UserProfile},
  Post: {screen: PostView},
},
  {headerMode : 'none'}
);

AppRegistry.registerComponent('Corgo', () => SimpleApp);
export default SimpleApp;
