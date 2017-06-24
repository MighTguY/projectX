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
var userService = require('../src/components/util/user_service');
import {FirstStack} from '../src/components/routes/firstRoute.js'
import Dashboard from '../src/components/dashboard/Dashboard'

export default class Greeting extends Component {

  render() {
    var user = userService.getCurrentUser();
    alert(user);

     if(user!=null){
       screen =  <Intro />;
     }else {
       screen= <FirstStack />;
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
