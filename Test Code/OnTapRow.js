import React, { Component } from 'react';
import {
  Navigator,    // Allows to navigate between different screens
  StatusBar,    // Allows to hide the status bar
  Text
} from 'react-native';
import Timeline from './Timeline';

class OnTapRow extends React.Component {
	render() {
		return(
			// Handle navigation between screens
	      <Navigator
	        // Default to list route
	        initialRoute={{name: 'Timeline'}}
	        // Use FloatFromBottom transition between screens
	        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
	        // Pass a route mapper functions
	        renderScene={RouteMapper}
	      />
	    );
	}
}

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'Timeline') {
    return (
      // TODO: Add List component
      <Timeline navigator={navigationOperations} />
    );
  } else if (route.name === 'Post') {
    // TODO: Add Movie component for a movie detail screen
  }
};

export default OnTapRow;

