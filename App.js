import * as React from 'react';
import { View, Text, Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowVideo from './Screens/ShowVideo';
import HomeScreen from './Screens/Enter';
import ChatScreen from './Screens/chatScreen';
import Login from './Screens/LogIn';
import TestingChat from './Screens/TestingChat';
import  FList from "./Screens/FList"
import SignUp from './Screens/SignUp';
import TestUpload from './New folder/TestUpload';
import {PracticeProvider} from './Context/Context';
import Home from './Screens/Home';
import { MyContextProvider } from './ContextApi/Context';
import { createContext, useState } from "react";
import Main from './Main panel/Main';
import Wall from './Screens/Wall';
import MyForm from './Form/FormHandling';
import TestNav from './Screens/SendToCountries';
import MyOffer from "./Screens/MyOffers"
import { GetData } from './Screens/GetData';
import Chat from './Screens/MessageChat';
import SqliteDbTest from './Screens/SqliteDbTest';
// import { Provide,Practice } from './Context';
// const ss=React.createContext();
const Stack = createNativeStackNavigator();

export const ContextApi=createContext();

export default function App() {

const [id,setId]=useState();
const [msg,setMsg]=useState();
const [nam,setNam]=useState();
const [image,setImage]=useState();
const [country,setCountry]=useState();
const[data,setData]=useState();
const[flag,setFlag]=useState(null);
const [offerProfile,setOfferProfile]=useState({
  recvId:0,price:0,sendId:0
})
const [chatLoad,setChat]=useState(0); 
const [msgLoad,setMsgLoad]=useState([])
// this flag when load all the chats from internal database then after loading this would be one 

let x=1;
  return (
  
    <ContextApi.Provider value={{id,setId,msg,setMsg,nam,setNam,image,setImage,country,x,
    setCountry,data,setData,flag,setFlag,offerProfile,setOfferProfile,chatLoad,setChat,msgLoad,setMsgLoad}}>
    <MyContextProvider>
    <NavigationContainer>

  
      <Stack.Navigator initialRouteName="LogIn"
       screenOptions={{
                headerShown:false,
                statusBarColor:'#779eb2'
              }}
      >

<Stack.Screen name="Db" component={SqliteDbTest}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 />

<Stack.Screen name="video" component={ShowVideo}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 />


<Stack.Screen name="LogIn" component={Login}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 />
<Stack.Screen  name='wall' component={Wall}
screenOptions={{
 
  statusBarColor:'#779eb2'
}}
  /> 
<Stack.Screen name="Form" component={MyForm}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 />

<Stack.Screen
  name='chat'
  component={Chat}
  options={({ route }) => ({
    headerShown: true,
    headerStyle: {
      backgroundColor: '#779eb2',
    },
    headerTitle: () => {
      const { userName,userImg } = route.params || {};

      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
          <Image
            source={userImg}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userName}</Text>
        </View>
      );
    },
  })}
/>

{/* <Stack.Screen name="Form" component={MyForm}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 /> */}

<Stack.Screen  name='TestNav' component={TestNav}
screenOptions={{
 
  statusBarColor:'#779eb2'
}}
/> 

{/* <Stack.Screen name="Form" component={MyForm}                                                                                                                                                                                                                                                                                                                     

screenOptions={{
 
  statusBarColor:'#779eb2'
}}
 /> */}

    
{/* rendering this wall component for testing purpose otherwise its alreday there in main.js */}
{/* <Stack.Screen  name='wall' component={Wall}
screenOptions={{
 
  statusBarColor:'#779eb2'
}}
  />   */}




         
              
          <Stack.Screen  name='Main' component={Main}
screenOptions={{
 
  statusBarColor:'#779eb2'
}}

          />     
       <Stack.Screen name='SignUp' component={SignUp}
        screenOptions={{
          headerShown:false
        }}/>
      
      
       
      </Stack.Navigator>
    </NavigationContainer>
    </MyContextProvider>
    </ContextApi.Provider>
//  <ShowVideo />

 //<TestUpload /> 
  );
}

