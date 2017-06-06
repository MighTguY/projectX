import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default class Splash extends Component {
  render () {
    return (
      <View style = {styles.wrapper}>
          <View style = {styles.titlewrapper}>
              <Text style = {styles.title}>Project X  </Text>
          </View>
          <View style = {styles.subtitlewrapper}>
            <Text style = {styles.subtitle}> Powered by React Native </Text>
          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(231, 76, 60,1.0)',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom:20

  },
  titlewrapper: {
    flex:1,
    justifyContent: 'center',

  },
  subtitlewrapper: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
