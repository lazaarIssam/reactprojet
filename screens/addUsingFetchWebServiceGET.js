/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList,TouchableOpacity, Text , View} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//type Props = {};
export default class App extends Component {
    static navigationOptions ={
        title: 'Fenetre 5',
    };
state={produits:[]}
async componentDidMount(){
  fetch('http://wisdmobile.000webhostapp.com/Ajout.php?ref=issam lazaar &des=Pcpcpcpcandpc',
  {
    method: 'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
  render() {
    const {navigate} = this.props.navigation;
    var x=0;
    return (
      <Text>Bien enregistré</Text>
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
  idst: {
    color: 'black',
    backgroundColor: 'green',
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
});
