/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

var userService = require('../util/user_service');

import styles from '../../styles/Login/LoginFormStyles.js';

export default class LoginForm extends Component {

  openSignup() {
    console.log(this.props);
    this.props.nav.navigate('Signup',{nav: this.props.nav});
  }

  state = {
     email: '',
     password: ''
  }

  handleEmail = (text) => {
     this.setState({ email: text })
  }

  handlePassword = (text) => {
     this.setState({ password: text })
  }

  login = (email, pass) => {
    if((email == "")||(pass=="")) {
     alert("please enter correct details");
     return;
     }

     userService.authenticate(email, pass,

     function(error, message, user) {
         var repo = {};
         if (error!=="") {
             repo.error="true";
             repo.message=message;
             repo.code=error;
             alert(JSON.stringify(message));
         } else {
             repo.response = user;
             alert("Successfully logged in  ,  Welcome "+user.email)
     }
 });

  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      />
        <TextInput
        placeholder="Username or Email"
        placeholderTextColor="rgba(44, 62, 80,1.0)"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText = {this.handleEmail}
        onSubmitEditing={()=>this.passwordInput.focus() }
          style={styles.input}
         />
        <TextInput
        placeholder="Password"
        returnKeyType="go"
        secureTextEntry
        placeholderTextColor="rgba(44, 62, 80,1.0)"
        style={styles.input}
        onChangeText = {this.handlePassword}
        ref={(input)=> this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.login(this.state.email, this.state.password)}>
        <Text style={styles.buttonText}> LOGIN</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress = {()=>this.openSignup()} >
        <Text style={styles.buttonText}> NOT A MEMBER YET?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
