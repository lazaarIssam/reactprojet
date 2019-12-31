/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Button,TextInput,FlatList,Text , View} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import axios from 'axios';

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
state={produits:[]}
fct=(value1saisi)=>{this.setState({value1:value1saisi})}
fctt=(value2saisi)=>{this.setState({value2:value2saisi})}
    static navigationOptions ={
        title: 'Fenetre 5',
    };
state={produits:[]}
async componentDidMount(){
  try{
    const result = await fetch('http://wisdmobile.000webhostapp.com/selection.php');
    const data = await result.json();
    this.setState({produits: data});
  }catch(err){
    alert("probleme")
  }
}
addtobase=()=>{
  axios.post(
    'http://wisdmobile.000webhostapp.com/AjoutP.php',{
      'ref': this.state.value1,
      'des': this.state.value2,
    }
  ).then(function(response){
    alert("bien");
    this.componentDidMount();
  }).catch(function (error){
    alert("pas bien");
  });
  
}
  render() {
    const {navigate} = this.props.navigation;
    var x=0;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input1} onChangeText={this.fct} value={this.state.value1}></TextInput>
        <TextInput style={styles.input2} onChangeText={this.fctt} value={this.state.value2}></TextInput>
        <Button onPress={this.addtobase}
       title="Send" color="blue"/>
       <FlatList
      data={this.state.produits}
        renderItem={ ({item}) =>
          <View style={styles.container}>
            <Text style={styles.desgst}>{item.rf}</Text>
            <Text style={styles.descst}>{item.dg}</Text>
          </View> 
      }
    keyExtractor={item =>item.id}
    />
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
  input1: {
    color: 'black',
    backgroundColor: 'green',
  },
  input2: {
    color: 'black',
    backgroundColor: 'red',
  },
});
