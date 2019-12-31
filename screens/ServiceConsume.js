/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList,TouchableOpacity,Image, Text, Button , View,Alert, TextInput} from 'react-native';
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
  try{
    const result = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    this.setState({produits: data});
  }catch(err){
    alert("probleme")
  }
}
  render() {
    const {navigate} = this.props.navigation;
    var x=0;
    return (
      <FlatList
      data={this.state.produits}
        renderItem={ ({item}) =>
        <TouchableOpacity
        onPress={()=> 
          navigate('produit',{idpr:item.id,descpr:item.title,desgpr:item.body,imgpr:item.img})
      }
        >
        <View style={styles.instructions}>
          <View style={styles.container}>
          <Text style={styles.idst}>user Id: {item.userId}</Text>
          <Text style={styles.idst}>Id : {item.id}</Text>
            <View style={styles.sousst}>
            <Text style={styles.desgst}>{item.title}</Text>
            <Text style={styles.descst}>{item.body}</Text>
            </View>
          </View> 
        </View>
        </TouchableOpacity>
      }
    keyExtractor={item =>item.id}
    />
      
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
