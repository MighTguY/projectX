/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
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
        onSubmitEditing={()=>this.passwordInput.focus() }
          style={styles.input}
         />
        <TextInput
        placeholder="Password"
        returnKeyType="go"
        secureTextEntry
        placeholderTextColor="rgba(44, 62, 80,1.0)"
        style={styles.input}
        ref={(input)=> this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> SIGNUP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20

  },
  input: {
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'rgba(44, 62, 80,1.0)',
    fontSize:18,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor:'rgba(231, 76, 60,1.0)',
    paddingVertical: 15,
    marginBottom:10
  },
  buttonText : {
    textAlign: 'center',
    color : '#FFF',
    fontWeight : '700'
  }
});
