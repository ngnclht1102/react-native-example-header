import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
} from 'react-native';
import styles from './view.style'

StatusBar.setBarStyle('light-content');
StatusBar.setBackgroundColor('transparent')

export default class ExampleProject extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navigationBar}>

              <View style={[styles.leftView, styles.navContent]}>
                <Text style={styles.whiteText}>Back</Text>
              </View>

              <View style={[styles.middleView, styles.navContent]}>
                <Text style={[styles.titleText, styles.whiteText]}>Dashboard</Text>
              </View>

              <View style={[styles.rightView, styles.navContent]}>
                <Text style={styles.whiteText}>Continue</Text>
              </View>

          </View>
      </View>
    );
  }
}
