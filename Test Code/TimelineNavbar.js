import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
   navbar: {
    paddingTop: 20,
    height: 70,
    backgroundColor: 'mediumaquamarine',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 12,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center', // step 3
  },
  leftText: {
    color: '#089de3',
  },
  titleText: {
    fontWeight: '600',
  },
  rightText: {
    color: '#089de3',
    fontSize: 10,
  },
});

class TimelineNavbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style = {styles.leftText}></Text>
        <Text style = {styles.title}>Timeline</Text>
      </View>
    );
  }
}

export default TimelineNavbar;