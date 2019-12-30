/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  SafeAreaView
} from 'react-native';

import ImageElement from './src/ImageElement';


export default class ImageGallery extends Component{

  state = {
    modalVisible: false,
    modalImage: require('./src/imgs/1.jpg'),
    images: [
      require('./src/imgs/1.jpg'),
      require('./src/imgs/2.jpg'),
      require('./src/imgs/3.jpg'),
      require('./src/imgs/4.jpg'),
      require('./src/imgs/5.jpg'),
      require('./src/imgs/6.jpg')
    ],
    authors: [
      'Lisa',
      'Bart',
      'Lenny',
      'Carl',
      'Homer',
      'Marge'
    ]
  }

  setModalVisible(visible, imageKey){
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });

  }

  getImage(){
    return this.state.modalImage;
  }

  render(){

    let images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key} 
              onPress={() => { this.setModalVisible(true, key)} }>

                <View style={styles.imagewrap}>
                  <ImageElement authorName={this.state.authors[key]} imgsource={val}></ImageElement>
                </View>

              </TouchableWithoutFeedback>
    });

    return(
      <View style={styles.container}>

        <Modal style={styles.modal}
                animationType={'slide'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}>

                <View style={styles.modal}>
                  <Text style={styles.text} onPress={() => {this.setModalVisible(false)}}>X</Text>
                  <ImageElement imgsource={this.state.modalImage}></ImageElement>
                </View>

        </Modal>
        <SafeAreaView>
          <ScrollView>
            {images}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee'
  },

  imagewrap: {
    padding: 2,
    height: (Dimensions.get('window').height/3),
    width: (Dimensions.get('window').width),
    backgroundColor: '#fff'
  },

  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },

  text: {
    color: '#fff'
  }
});
