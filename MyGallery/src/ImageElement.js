import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native';


export default class ImageElement extends Component{
  render(){
    return(
      <ImageBackground source={this.props.imgsource} style={styles.image}>
        <Text style={styles.text}>Author: {this.props.authorName}</Text>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  text: {
    backgroundColor: 'black',
    color: 'white'
  }
});