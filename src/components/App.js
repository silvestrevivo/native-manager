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

import RouterComponent from '../../Router'

const store = configureStore()

export default class App extends Component {

  state = {
    loggedIn: null
  }

  componentDidMount() {
    firebase.initializeApp(firebaseObject);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent log={this.state.loggedIn} />
      </Provider>
    );
  }
}
