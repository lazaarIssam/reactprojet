/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList, Text, Button , View,Alert, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//type Props = {};
export default class App extends Component {
  constructor (props){
    super(props);
    this.state={email:'',nom:'',count:0}
  }
  state={produits:[{'id:':'re14','desg:':'clavier'},
                   {'id:':'re178','desg:':'television'},
                   {'id:':'re170','desg:':'laptop'}
                  ]
        }
  fct=(textsaisi)=>{this.setState({email:textsaisi})}
  fctt=(nomsaisi)=>{this.setState({nom:nomsaisi})}
  fcttt=(countsaisi)=>{this.setState({count:countsaisi})}
  validateEmail = (textsaisi) => {
    var re = /[1-9]/;
      return re.test(this.state.email);
  };
  counteur = ()=>{this.setState({count:this.state.count +1})}
  counteurmoin = ()=>{this.setState({count:this.state.count -1})}
  render() {
    var x=0;
    return (
      <View style={styles.container}>
        <View  style={styles.issam}>
        <TextInput style={styles.welcome} onChangeText={this.fct} value={this.state.email}></TextInput>
        <TextInput style={styles.welcome} onChangeText={this.fctt} value={this.state.nom}></TextInput>
        <Button onPress={() => {
          if (this.validateEmail(this.state.email)) {
            alert(" non valide")
          } else{
            alert(" valide")
      
          }
        }}
         title="Send" color="blue"/>
          <Text>
           Email : {this.state.email} {'\n'}Nom : {this.state.nom}
          </Text>
          
        </View>
        <View style={styles.lazaar} >
            <View style={styles.partie1}><Text></Text></View>
            <Text style={styles.welcome} >{this.state.count}</Text>
            <Button onPress={this.counteur}
             title="plus" color="red"/>
             <Button onPress={this.counteurmoin}
             title="moin" color="green"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: '#000',
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
  },
  issam: {
    //flex:1,
    color: 'black',
    padding: 30,
    backgroundColor: '#ccccff',
  },
  lazaar: {
    //flex: 1,
    color: 'yellow',
    //flexDirection: 'row',
    backgroundColor: 'green',
  },
  partie1: {
    //flex: 1,
    color: 'blue',
    backgroundColor: '#8080ff',
    padding: 30,
  },
  partie2: {
    //flex: 1,
    color: 'blue',
    backgroundColor: '#3333ff',
    padding: 30,
  },
    partie3: {
    //flex: 1,
    color: 'blue',
    backgroundColor: '#000080',
    padding: 30,
  },
});
