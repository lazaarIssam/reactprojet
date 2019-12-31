/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    
    super(props);
 //tbl principal dans lequel ajouterait simplement quelques valeurs par défaut pour la FlatList.
    this.array = [{
     title: 'ONE'
    }
    ],
 
      this.state = {
 
        arraytitulaire: [],
 
        textInput_titulaire: ''
 
      }
 
  }

  componentDidMount() {
 
    this.setState({ arraytitulaire: [...this.array] })
 
  }
 
 
  joinData = () => {
 
    this.array.push({title : this.state.textInput_titulaire});
 
    this.setState({ arraytitulaire: [...this.array] })
 
  }
 
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#00ABAA",
        }}
      />
    );
  }
 
  GetItem(item) {
 
    Alert.alert(item);
 
  }
 
 

  render() {
    return (
      <View style={styles.MainContainer}>
 
      <TextInput
        placeholder="Enter une valeur"
        onChangeText={data => this.setState({ textInput_titulaire: data })}
        style={styles.textInputStyle}
        underlineColorAndroid='transparent'
      />

      <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

        <Text style={styles.buttonText}> Ajouter</Text>

      </TouchableOpacity>

      <FlatList

        data={this.state.arraytitulaire}

        width='100%'

        extraData={this.state.arraytitulaire}

        keyExtractor={(index) => index.toString()}

        ItemSeparatorComponent={this.FlatListItemSeparator}

        renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
      />


    </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
 
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
  textInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00ABAA',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
 
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#00ABAA',
    borderRadius: 8,
    marginTop: 10
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
