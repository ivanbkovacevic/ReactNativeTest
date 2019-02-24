import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';
import {createStackNavigator,createDrawerNavigator, createAppContainer} from 'react-navigation';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Invites from './components/Invites';
import Messages from './components/Messages';
import Test from './components/Test';

 class App extends React.Component {

  render() {

    let iconContainer=<View style={styles.iconContainer}>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('./assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:50}} source={require('./assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
    </View>

    let subNavigation= <View style={styles.subNavigation}>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"purple",marginLeft:20}}>Invites</Text></TouchableHighlight>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"purple",marginLeft:20}}>Messages</Text></TouchableHighlight>
    </View>;
    return (
      <View style={styles.mainContainer}> 
          <ImageBackground source={require('./assets/header_background_main_screen.jpg')} style={styles.headerContainer}>
        
          <View style={styles.searchHomeContainer}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('Home')} ><Image style={{height:30,width:30}} source={require('./assets/icons/left_menu_button.png')} /></TouchableHighlight>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate('')} ><Image style={{height:40,width:30}} source={require('./assets/icons/search_icon.png')} /></TouchableHighlight>
          </View>
            {iconContainer}
          
           </ImageBackground>   
           {subNavigation}
         
                <Image  style={{ flex: 1,
                  alignSelf: 'stretch',
                  width: undefined,
                  height: undefined}}  
                  resizeMode="cover"
                  source={require('./assets/screens/04.4.1_Main_Explore.jpg')}/>   
                  <Test/>              
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

const customDrawer=(props)=>{
  return(
    <View style={{flex: 1,
      alignSelf: 'stretch',
      justifyContent:"center"}}>
    
    <Image  style={{ flex: 1,
                  alignSelf: 'stretch',
                  width: undefined,
                  height: undefined}}  
                  resizeMode="contain"
                  source={require('./assets/screens/12_Side_Menu.jpg')}/>  
  </View>
  )

}

const AppDrawerNavigator=createDrawerNavigator({
   Home:{
     screen:App
   },
   screen1:Screen1,
   screen2:Screen2,
   screen3:Screen3,
   screen4:Screen4,
   messages:Messages,
   invites:Invites,
   test:Test
},
{
  initialRouteName:'Home',
  contentComponent:customDrawer
  
});

const AppNavigator = createStackNavigator({
  Home: {screen: AppDrawerNavigator,
    navigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent:true
  })},
  screen1:Screen1,
  screen2:Screen2,
  screen3:Screen3,
  screen4:Screen4,
  invites:Invites,
  messages:Messages,
  test:Test
}

);

export default createAppContainer(AppNavigator);
