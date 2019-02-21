import React, { Component } from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';


export default class Test4 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.bigBlue}>TEST4 Screen</Text>
        <Button style={styles.bigBlue} onPress={()=>this.props.navigation.navigate('Home')} title="GO to the HomeScreen"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test2')} title="GO to the TEST2"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test3')} title="GO to the TEST3"></Button>
        <Button onPress={()=>this.props.navigation.navigate('test1')} title="GO to the TEST1"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });