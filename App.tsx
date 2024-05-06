import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Agenda from './src/screen/Agenda'

export default class App extends Component {
  render() {
    return (
      <View>
        <Agenda></Agenda>
      </View>
    )
  }
}