/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {NavigationActions} from 'react-navigation'

var userService = require('../util/user_service');

import styles from '../../styles/Signup/SignupFormStyles.js';

export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    password: ''
  }

  handleName = (text) => {
    this.setState({name: text})
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }

  handlePhone = (text) => {
    this.setState({phone: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  signup = (name, email, pass, phone) => {
    if ((email == "") || (pass == "")) {
      alert("please enter correct details| email and pass are manditory");
      return;
    }

    userDetails = {};
    userDetails.phone = phone;
    userDetails.name = name;
    userDetails.pic = "http://poolwallet.com/assets/img/default.jpg";
    const nav = this.props.nav;
    userService.addUser(email, pass, function(error, message, uid) {
      var repo = {};
      if (error) {
      alert(JSON.stringify(message));
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Login'})]
        });
        alert("User Registered" + uid);
        nav.dispatch(resetAction)
      }
    }, userDetails);

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <TextInput placeholder="Name" placeholderTextColor="rgba(44, 62, 80,1.0)" returnKeyType="next" keyboardType="default" autoCapitalize="none" autoCorrect={false} onChangeText={this.handleName} onSubmitEditing={() => this.emailInput.focus()} style={styles.input}/>
        <TextInput placeholder="Username or Email" placeholderTextColor="rgba(44, 62, 80,1.0)" returnKeyType="next" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} onChangeText={this.handleEmail} ref={(input) => this.emailInput = input} onSubmitEditing={() => this.phone.focus()} style={styles.input}/>
        <TextInput placeholder="Phone" placeholderTextColor="rgba(44, 62, 80,1.0)" returnKeyType="next" keyboardType="phone-pad" autoCapitalize="none" autoCorrect={false} onChangeText={this.handlePhone} ref={(input) => this.phone = input} onSubmitEditing={() => this.passwordInput.focus()} style={styles.input}/>
        <TextInput placeholder="Password" returnKeyType="go" secureTextEntry placeholderTextColor="rgba(44, 62, 80,1.0)" style={styles.input} onChangeText={this.handlePassword} ref={(input) => this.passwordInput = input}/>

        <TouchableOpacity style={styles.buttonContainer} onPress= {()=>this.signup(this.state.name,this.state.email, this.state.password,this.state.phone)}>
          <Text style={styles.buttonText}>
            REGISTER</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
