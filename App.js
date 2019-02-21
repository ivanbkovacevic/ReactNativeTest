import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}> 
        
          <ImageBackground source={require('./assets/header_background_main_screen.jpg')} style={styles.imgContainer}>
          <View style={styles.iconContainer}>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('test1')} ><Image source={require('./assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('test2')} ><Image source={require('./assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('test3')} ><Image source={require('./assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('test4')} ><Image source={require('./assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
               </View> 
           </ImageBackground>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor:"purple",
    flex: 1,
    flexDirection:'row',
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imgContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:"flex-end",
    justifyContent:"center",
    minHeight:"30%"
  },
  iconContainer:{
    backgroundColor:"black",
    opacity:0.5,
    padding:"2%",
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight:"50%"
  },
  whiteText: {
    color: 'white',
    fontSize:12
  },
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  test1:Test1,
  test2:Test2,
  test3:Test3,
  test4:Test4,
});

export default createAppContainer(AppNavigator);
