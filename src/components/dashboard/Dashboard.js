/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import MapContainer from "./MapContainer"

import { Container } from "native-base"

export default class Dashboard extends Component {
  render() {
    const region = {
      latitude: 28.573405,
      longitude: 77.371203,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    };
    return (
      <Container>
      <MapContainer region={region}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
