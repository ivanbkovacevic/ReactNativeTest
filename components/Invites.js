import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';

export default class Invites extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}> 
       <ImageBackground source={require('../assets/header_background_main_screen.jpg')} style={styles.imgContainer}>
          <View style={styles.iconContainer}>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
                  <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
               </View>
           </ImageBackground>    
           <Text>INVITES</Text>
          
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
    alignItems: "center",
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
    maxHeight:"50%"
  }
});



