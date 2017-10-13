import StarRating from 'react-native-star-rating';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });

class RatingStar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.starCount,
      starSize: this.props.starSize,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style = {styles.container}>
        <StarRating
          disabled={true}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starSize = {this.state.starSize}
        />
      </View>
    );
  }
}

export default RatingStar
