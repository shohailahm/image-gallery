/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ToastAndroid} from 'react-native';
import Gallery from './containers/GalleryContainer';
import store from './store';
import { Provider } from 'react-redux';




type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Gallery</Text>
        </View>
        <Provider store={store}>
         <Gallery />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
    height:60,
    backgroundColor:'blue',
    width:'100%',
    justifyContent:'center',
    paddingLeft:8
  },
  headerText:{
    color:'#fff'
  }
});
