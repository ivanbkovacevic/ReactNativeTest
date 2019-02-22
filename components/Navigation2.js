import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Invites from './components/Invites';
import Messages from './components/Messages';

export default class Navigation2 extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}> 
      <Text>navigation2</Text>
          <ImageBackground source={require('./assets/header_background_main_screen.jpg')} style={styles.imgContainer}>
              <View style={styles.iconContainer}>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
               </View>
           </ImageBackground>   
           <View style={styles.subNavigation}>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"blue",marginLeft:20}}>Invites</Text></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"blue",marginLeft:20}}>Messages</Text></TouchableHighlight>
           </View>
                <Image  style={{ flex: 2,
                  alignSelf: 'stretch',
                  width: undefined,
                  height: undefined}}  
                  resizeMode="cover"
                  source={require('./assets/screens/04.4.1_Main_Explore.jpg')}/>                 
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
    alignItems: 'stretch',
    justifyContent: "flex-start"
  },
  imgContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:"flex-end",
    justifyContent:"center",
    maxHeight:200
  },
  iconContainer:{
    backgroundColor:"black",
    opacity:0.5,
    padding:"3%",
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight:"50%"
  },
  icons:{
    maxHeight:"50%",
    borderColor:"black"
  },
  subNavigation:{
    flex:1,
    maxHeight:50,
    flexDirection:"row",
    alignItems: "center",
    backgroundColor:"white",
    justifyContent: 'flex-start',
  },
  whiteText: {
    color: 'white',
    fontSize:12
  },
});


