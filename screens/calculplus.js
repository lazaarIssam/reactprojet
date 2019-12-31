/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text, Button , View,Alert, TextInput} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//type Props = {};
export default class App extends Component {
  constructor(props) {
  super(props);
  this.state={value1:'',value2:''}
  }
  fct=(value1saisi)=>{this.setState({value1:value1saisi})}
  fctt=(value2saisi)=>{this.setState({value2:value2saisi})}
  render() {
    return (
        <View>
        <TextInput style={styles.input1} onChangeText={this.fct} value={this.state.value1}></TextInput>
        <TextInput style={styles.input2} onChangeText={this.fctt} value={this.state.value2}></TextInput>
        <Button onPress={() => {
              alert(parseInt(this.state.value1) +parseInt(this.state.value2))
          }}
           title="Send" color="blue"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    //justifyContent: 'center',
    //alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    backgroundColor: 'white',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    flexDirection: 'row',
  },
  input2: {
    color: 'black',
    backgroundColor: 'green',
  },
  input1: {
    color: 'black',
    backgroundColor: 'red',
  },
  desgst: {
    flex:2,
    fontSize: 12,
    color: 'black',
    backgroundColor: '#3333ff',
  },
  descst: {
    fontSize:12,
    flex:8,
    color: 'black',
    backgroundColor: '#9655ff',
  },
  imgst: {
    width: 50,
    height: 50,
  },
  sousst: {
    flexDirection: 'row',
  },
  inputst: {
    backgroundColor: '#46451f',
  },
});
