/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from '../components/Store';

import firebase from 'firebase'
import firebaseObject from '../../firebaseObject'

//import LoginForm from './LoginForm';
import Router from '../../Router'

const store = configureStore()

export default class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseObject);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
