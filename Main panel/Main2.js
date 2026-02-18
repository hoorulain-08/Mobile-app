import { View, Text,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import ChatScreen from '../Screens/chatScreen'
import TestingChat from '../Screens/TestingChat'
import Enter from '../Screens/Enter'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { style } from '../Style/style'
import DrawerHeader from './DrawerHeader'
import Wall from '../Screens/Wall'
import MyOffers from '../Screens/MyOffers'
const Drawer = createDrawerNavigator();

export default function Main2() {
    console.log("In Main2 function")
  return (

    <Drawer.Navigator
    
    drawerContent={props => <DrawerHeader {...props} />}
    screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#6facbf',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
    //    marginLeft: -25,
        fontFamily: 'Roboto-Medium',
      //  fontSize: 15,
      },
    }}





    >
      
      
      <Drawer.Screen name='Wall' component={Wall}

screenOptions={{
  headerShown:true,
}} 
options={{
  headerStyle: {
    backgroundColor: '#6facbf'
}
}}
/>

<Drawer.Screen name='offer' component={MyOffers}

screenOptions={{
  headerShown:true,
}} 
options={{
  headerStyle: {
    backgroundColor: '#6facbf'
}
}}
/>



<Drawer.Screen name='Home' component={Home}

screenOptions={{
  headerShown:true,
}} 
options={{
  headerStyle: {
    backgroundColor: '#6facbf'
}
}}
/>
 <Drawer.Screen name="ChatScreen" component={ChatScreen} 
       screenOptions={{
        headerShown:true,
       statusBarColor:'#6facbf'
       
      }} />
  
          <Drawer.Screen  name="TestChat" component={TestingChat} 
          screenOptions={{
        headerShown:true
      }}  /> 
       <Drawer.Screen name="Enter" component={Enter}
       screenOptions={{
        headerShown:true
      }} /> 
      
     
    </Drawer.Navigator>

  )
}