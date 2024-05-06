import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'
import Agenda from './src/screen/Agenda'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Agenda></Agenda>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
});