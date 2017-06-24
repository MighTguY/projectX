/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';

import SignUpForm from './SignUpForm' ;

export default class Signup extends Component {
  render() {
    const { params } = this.props.navigation.state;



    return (
      <KeyboardAvoidingView  behaviour="padding"  style={styles.container} >
      <View style={styles.logoContainer}>
      <Image
      style = {styles.logo}
      source={require('../../../assets/image/load3.gif')}
      />
      <Text style={styles.title}> An app for projectX using react native</Text>
      </View>
      <View style={styles.formContainer}>
      <SignUpForm nav={this.props.navigation} />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logoContainer: {
    alignItems: 'center',
    'flexGrow':1,
    'justifyContent': 'center'
  },
  logo: {
    width:350,
    height:150
  },
  title:{
    color: 'rgba(231, 76, 60,1.0)',
    marginTop:10,
    width:260,
    textAlign:'center',
    opacity:0.9
  }
});
