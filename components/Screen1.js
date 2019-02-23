import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';


export default class Screen1 extends React.Component {
  render() {
    let iconContainer=<View style={styles.iconContainer}>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
  </View>

  let subNavigation= <View style={styles.subNavigation}>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"blue",marginLeft:20}}>Invites</Text></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"blue",marginLeft:20}}>Messages</Text></TouchableHighlight>
  </View>;
    return (
      <View style={styles.mainContainer}> 
       {/* <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} >
           <Image style={{alignSelf:"flex-end",justifyContent:"flex-end", height:30,width:30}} source={require('../assets/icons/search_icon.png')} />
       </TouchableHighlight> */}
       <ImageBackground source={require('../assets/header_background_main_screen.jpg')} style={styles.imgContainer}>
      
         {iconContainer}
      </ImageBackground>   
           {subNavigation}

           <Image  style={{ flex: 2,
                  alignSelf: 'stretch',
                  width: undefined,
                  height: undefined}}  
                  resizeMode="cover"
                  source={require('../assets/screens/04.1.2_Main_Alerts.jpg')}/>
                 
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
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  imgContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:"flex-end",
    justifyContent:"center",
    maxHeight:200
  },
  subNavigation:{
    flex:1,
    maxHeight:50,
    flexDirection:"row",
    alignItems: "center",
    backgroundColor:"white",
    justifyContent: 'flex-start',
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



