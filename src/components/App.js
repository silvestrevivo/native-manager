/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Provider } from "react-redux";
import { createStore } from 'redux'
import reducers from '../reducers'

import firebase from 'firebase'
import firebaseObject from '../../firebaseObject'

export default class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseObject);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Welcome to React Native!</Text>
          <Text>To get started, edit App.js</Text>
        </View>
      </Provider>
    );
  }
}
