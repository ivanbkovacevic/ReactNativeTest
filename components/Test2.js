import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';


export default class Test2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TEST2 Screen</Text>
        <Button onPress={()=>this.props.navigation.navigate('Home')} title="GO to the HomeScreen"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test1')} title="GO to the TEST1"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test3')} title="GO to the TEST3"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test4')} title="GO to the TEST4"></Button>
      </View>
    );
  }
}
