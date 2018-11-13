/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from "react-redux";
import { createStore } from 'redux'
import reducers from '../reducers'

import firebase from 'firebase'
import firebaseObject from '../../firebaseObject'

import LoginForm from './LoginForm';

export default class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseObject);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
