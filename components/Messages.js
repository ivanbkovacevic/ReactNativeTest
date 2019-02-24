import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TouchableHighlight,Image,ImageBackground,FlatList } from 'react-native';
import Data from "./Data";


export default class Messages extends React.Component {
  render() {
    let iconContainer= <View style={styles.iconContainer}>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen1')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_alarm_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen2')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_globe_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen3')} ><Image style={{height:40,width:40}} source={require('../assets/icons/topbar_star_icon.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={()=>this.props.navigation.navigate('screen4')} ><Image style={{height:40,width:50}} source={require('../assets/icons/topbar_users_icon.png')} /></TouchableHighlight>
 </View>
 let subNavigation=<View style={styles.subNavigation}>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('invites')}><Text style={{color:"purple",marginLeft:20}}>Invites</Text></TouchableHighlight>
 <TouchableHighlight onPress={()=>this.props.navigation.navigate('messages')}><Text style={{color:"purple",marginLeft:20}}>Messages</Text></TouchableHighlight>
</View>;
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

   <View style={styles.messagesContainer}>
           <FlatList 
                   data={Data}
                   keyExtractor={item => item.id}
                   renderItem={({item})=>(

               <View style={styles.messagesSubContainer}>
                 <Image  style={{ 
                  alignSelf:"flex-start",
                  width: 70,
                  height: 70}}
                  resizeMode="contain" 
                  source={require('../assets/faces/face_3.jpg')} />
                 <View style={styles.textContainer}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{fontSize:10}}>{item.messageText} </Text>
                 </View>
                 <View style={styles.pointsContainer}>
                     <View style={styles.clockContainer}>
                     <Image style={{height:20,width:20}} source={require('../assets/icons/clock_icon.png')} />
                        <Text style={{fontSize:12,color:"grey"}}>{item.time}</Text>
                     </View>
                    <View><Text style={{fontSize:18,color:"white",backgroundColor:"purple",padding:5}}>{item.points}</Text></View>
                 </View>
                
              </View> 
                  ) }   
                         
            /> 
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
   clockContainer:{
   
      flexDirection:"row",
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
  },
  messagesContainer:{
      flex:1,
      backgroundColor:"white",
      justifyContent:"flex-start"
    },
    messagesSubContainer:{
      flex:1,
      padding:"3%",
    
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      flexDirection:"row",
      alignItems:"flex-start",
      justifyContent:"space-between"
    },
    textContainer:{
      flex:4,
     
      alignItems:"flex-start",
      justifyContent:"flex-start",
      padding:"3%"
    },
    pointsContainer:{
      flex:1,
      height:"80%",
  
      alignItems:"center",
      justifyContent:"space-between"
    }
  
});



