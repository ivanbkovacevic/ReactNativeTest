import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';


export default class Screen4 extends React.Component {
  render() {
    let iconContainer=  <View style={styles.iconContainer}>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:50}} source={require('../assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
 </View>

 let subNavigation=  <View style={styles.subNavigation}>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"purple",marginLeft:20}}>Invites</Text></TouchableHighlight>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"purple",marginLeft:20}}>Messages</Text></TouchableHighlight>
</View>

    return (
      <View style={styles.mainContainer}> 
        <ImageBackground source={require('../assets/header_background_main_screen.jpg')} style={styles.headerContainer}>
       <View style={styles.searchHomeContainer}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('Home')} ><Image style={{height:30,width:30}} source={require('../assets/icons/left_menu_button.png')} /></TouchableHighlight>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('')} ><Image style={{height:40,width:30}} source={require('../assets/icons/search_icon.png')} /></TouchableHighlight>
          </View>
        {iconContainer}
           </ImageBackground>   
          {subNavigation}
           <Image  style={{ flex: 1,
                  alignSelf: 'stretch',
                  width: undefined,
                  height: undefined}}  
                  resizeMode="cover"
                  source={require('../assets/screens/04.2.2_Main_Friends.jpg')}/>
                 
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
  headerContainer:{
    flex:1,
    alignItems:"stretch",
    justifyContent:"flex-end",
    maxHeight:200
  },
  iconContainer:{
    backgroundColor:"rgba(12, 12, 12, 0.5)",
    padding:"3%",
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  searchHomeContainer:{
    flex:3,
    padding:"2%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: 'space-between',
    },
  subNavigation:{
    flex:1,
    maxHeight:50,
    flexDirection:"row",
    alignItems: "center",
    backgroundColor:"white",
    justifyContent: 'flex-start',
  },

  icons:{
    maxHeight:"50%"
  }
});
