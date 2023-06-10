import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	     textAlign: 'center', 
       fontWeight: 'bold',
       fontSize: 50,
       backgroundColor: 'pink',width: 300,
       height: 300,
       borderBottomLeftRadius: 30,
       fontFamily: 'Times New Roman',
       textShadowColor:'black',
       textShadowOffset:{width: 10, height: 10},
       textShadowRadius:8,
       }}>HAPPY BIRTHDAY MY DEAR FRIEND:)</Text>
  
    );
  }
}


