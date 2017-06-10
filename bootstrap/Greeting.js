/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Splash from './Splash'
import Intro from './Intro'
import Intro1 from './Intro1'
import Login from '../src/components/login/Login'

export default class Greeting extends Component {

  render() {
     const isFirstTime = false;
     if(isFirstTime){
       screen =  <Intro />;
     }else {
       screen= <Login />;
     }
    return (
      screen
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
