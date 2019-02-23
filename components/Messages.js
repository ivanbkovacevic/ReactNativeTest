import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground } from 'react-native';


export default class Messages extends React.Component {
  render() {
    let iconContainer= <View style={styles.iconContainer}>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
 </View>
 let subNavigation=<View style={styles.subNavigation}>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"blue",marginLeft:20}}>Invites</Text></TouchableHighlight>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"blue",marginLeft:20}}>Messages</Text></TouchableHighlight>
</View>;
    return (
      <View style={styles.mainContainer}> 
       <ImageBackground source={require('../assets/header_background_main_screen.jpg')} style={styles.imgContainer}>
             {iconContainer}
       </ImageBackground>   
            {subNavigation}
           <View style={styles.messagesContainer}>
              <View style={styles.messagesSubContainer}>
                 <Image  style={{ 
                  alignSelf: 'center',
                  width: 60,
                  height: 60}}  
                  resizeMode="contain" source={require('../assets/faces/face_1.jpg')}/>
           
                 <View>
                    <Text style={{fontSize:18,fontWeight:"bold",color:"red"}}>Pera Peric</Text>
                    <Text style={{fontSize:10}}>lorem nvjsvnjsnjvnjsvj vjsnvjnsjvjsjvn</Text>
                 </View>
                 <View>
                    <Text>P</Text>
                    <Text style={{fontSize:18}}>10</Text>
                 </View>
             
              </View>
              <View style={styles.messagesSubContainer}>
              <Image style={{height:40,width:40}} source={require('../assets/faces/face_2.jpg')}/>
              <Text>llorem ipsum  reeeeeeeeee</Text>
              </View>
              <View style={styles.messagesSubContainer}>
              <Image style={{height:40,width:40}} source={require('../assets/faces/face_3.jpg')}/>
              <Text>llorem ipsum  reeeeeeeeee</Text>
              </View>
              <View style={styles.messagesSubContainer}>
              <Image style={{height:40,width:40}} source={require('../assets/faces/face_4.jpg')}/>
              <Text>llorem ipsum  reeeeeeeeee</Text>
              </View>
           </View>
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
    flex:2,
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
  },
  messagesContainer:{
      flex:1,
      backgroundColor:"green",
      alignItems:"stretch",
      justifyContent:"flex-end"
    },
    messagesSubContainer:{
      flex:1,
      padding:"3%",
      backgroundColor:"orange",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    }
  
});



