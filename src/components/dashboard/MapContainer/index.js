/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps'

import styles from './MapContainerStyles.js'

export const MapContainer = ({region})=>{
  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style = {styles.map}
        region= {region}
        >
         </MapView>
    </View>
  )
}

export default MapContainer;
