/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList,Image, Text, Button , View,Alert, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//type Props = {};
export default class App extends Component {
  state={produits:[{id:"re14",desc:"bhjsqdq",desg:"clavier",img:"http://192.168.51.199:4000/storage/images/0kN6OB8t0eLn4qNvMaiYp4wpI1btjfRSLjFFpEA7.jpeg"},
        {id:"re178",desc:"dqdskjn",desg:"television",img:"http://192.168.51.199:4000/storage/images/xjKwMnk8q7JjnZ6BFtyiemAURsKmBz2ThX3pERcC.png"},
        {id:"re170",desc:"dqkbkku",desg:"laptop",img:"http://192.168.51.199:4000/storage/images/xjKwMnk8q7JjnZ6BFtyiemAURsKmBz2ThX3pERcC.png"}
       ]
}
  render() {
    var x=0;
    return (
      <View style={styles.container}>
      <FlatList
      data={this.state.produits}
        renderItem={ ({item}) =>
          <View style={styles.instructions}>
          <Image style={styles.imgst}
            source={{uri:item.img}}
            //source={require('./img/image.png')}
            />
            <View style={styles.container}>
            <Text style={styles.idst}>{item.id}</Text>
              <View style={styles.sousst}>
              <Text style={styles.desgst}>{item.desg}</Text>
              <Text style={styles.descst}>{item.desc}</Text>
              </View>
            </View>
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
