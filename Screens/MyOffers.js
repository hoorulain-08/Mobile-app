
import React, { useEffect, useState } from 'react'
// import {TouchableOpacity,ScrollView,View,Button,TextInput,Text,StyleSheet} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import Home from '../Screens/Home'
// import ChatScreen from '../Screens/chatScreen'
// import TestingChat from '../Screens/TestingChat'
// import Enter from '../Screens/Enter'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { style } from '../Style/style'

// import Wall from '../Screens/Wall'
// import MyOffers from '../Screens/MyOffers'
// import { Provide } from '../Context'
// import { GetData } from '../Screens/GetData'
// import { Data} from '../Screens/Data'
// import { CombinedArray } from '../Screens/GetData'
import { ContextApi } from '../App'
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


import axios from 'axios';
const Drawer = createDrawerNavigator();
import { Platform } from 'react-native'
import * as FileSystem from 'expo-file-system';
import PostCard from '../Components/PostCardOffer';
// import Main2 from './Main2'
// import Modal from '../Screens/Modal'
// import ModalNew from '../Screens/Modal
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,

} from '../Style/OfferStyle';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  Image
} from 'react-native';


export default function MyOffers() {
    const navigation = useNavigation(); 
    const [testE,setTestE]=useState([]);
    const [post,setPost]=useState(null); 
    const [reg,setReg]=useState();
    // const[uril,setUril]=useState([]);
    const [show,setShow]=useState(false);
    const [temp,setTemp]=useState(null);
    const [img,setImg]=useState();
    const [data,setData]=useState();
    // const[ret,setRet]=useState(null)
    let Id=[]; let arr=[]; 
    const load=useContext(ContextApi);
    props=load.country;

   let emailNew=load.country;
    //let temp=null;
    useEffect(()=>{
      if(post==null || temp==null){
     console.log("executing if condition of  FetchAPI  useEffect   ")
      showImage();
      FetchApi();
        
        
      }

     else if(temp==2){
      console.log("I have entered in temp==2 condition of else if  ")
      console.log("below is reg= ")
console.log(reg)
console.log("below is post = ")
console.log(post)

const combinedArray = post.map((regItem, index) => ({
  id: regItem.id,
  name: regItem.name,
  image: testE[index],
  ...reg.find((postItem) => postItem.sendId === regItem.id),

}));

console.log("combinedArray is below = ");
console.log(combinedArray);

// load.setData(combinedArray);
if(combinedArray){
  setData(combinedArray);
 setShow(true); 
}
console.log("data  is below = ");
console.log(data);
setTemp(4);
//         for(let i=0;i<post.length;i++){
//           console.log("pictures  URI is  down below in useEffect of the temp==2 ")

// console.log(arr[i])
//         }
      }
      //  else if(temp==null){
      //   showImage();
      //  }
      //  else if(post==null){
      //   // showImage();
      //   FetchApi();
      //  }
// else if(temp==2){
//   console.log("in else if of useEffect and all imaged nad data has been fetched ")
// }



    }

    )
function display(){
 console.log("dsplay function is down below  ");
 console.log(testE);
// console.log("data is ");
// console.log(load.data);
// navigation.navigate('Form');
}
const generateRandomString = () => {
  length=5;
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter=0;
  while(counter<=length){
    result+=characters.charAt(Math.floor(Math.random()*charactersLength));
    counter+=1
  }
 return result
};

async function showImage(){
  
  console.log("show images ")

  let id=1,filename;
   
  for(let i=0;i<img.length;i++){
id=img[i];
console.log("show image functon id saved from image array is below ")
console.log(id);
    const localhost= Platform.OS === "android" ? "192.168.1.32" : "192.168.1.32";     
     filename = generateRandomString()+ '.jpg';
    // console.log("id is below ")
    // console.log(id);
    const result = await FileSystem.downloadAsync(
      // This will call all the images from reg table for that we have to replace the exact API
      `http://${localhost}:3000/imageTest/${id}`,
      FileSystem.documentDirectory + filename,
      {
       headers: {
         "content-type": "image/jpeg"
       }
      }
   );

//  console.log(" show image function pictures  URI is  down below ")
// console.log(result.uri)

  arr[i]=result.uri;
 //  console.log(arr[i]); 
  //  id++;
  }

 //console.log("post.length  is below in show images function down after loading all images ")
// console.log(post.length)
// console.log(arr[0])
setTestE(arr);
// console.log(testE)
setTemp(2)
//display();
 // setShow(tr.lue)
}
 async function FetchApi(){
      console.log("In Fetch Api function")
      fetch('http://192.168.1.32:3000/GetOffer', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body:JSON.stringify({
      recvId:1
    })
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the data received from the API
      console.log("Inside Api data  from above data  is here down = ");
      console.log(data)// Replace with your logic
      console.log("Inside Api data  from above result  is here down = ");
      console.log(data.result)
      const st=data.result.map((e)=>(e.sendId));
      // console.log("st is down below here")
      // console.log(st);
     if(st) {
      // console.log("setImage array n if condtion ")
      setImg(st);
     }
      
      setPost(data.offers);
      setReg(data.result);

      // display();
      
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle the error
    });
   
// let id=1,filename;
   
//     for(let i=0;i<1;i++){
//  id=i+1;

//       const localhost= Platform.OS === "android" ? "192.168.1.32" : "192.168.1.32";     
//        filename = generateRandomString()+ '.jpg';
//       // console.log("id is below ")
//       // console.log(id);
//       const result = await FileSystem.downloadAsync(
//         // This will call all the images from reg table for that we have to replace the exact API
//         `http://${localhost}:3000/imageTest/${id}`,
//         FileSystem.documentDirectory + filename,
//         {
//          headers: {
//            "content-type": "image/jpeg"
//          }
//         }
//      );
    
//    console.log("pictures  URI is  down below ")
//    console.log(result.uri)
 
//     arr[i]=result.uri;
   //   console.log(arr[i]); 
     //id++;
   // }

   // display();
  //   const localhost= Platform.OS === "android" ? "192.168.1.32" : "192.168.1.32";     
  //   const result = await FileSystem.downloadAsync(
  //     `http://${localhost}:3000/image/${id}`,
  //     FileSystem.documentDirectory + filename,
  //     {
  //      headers: {
  //        "content-type": "image/jpeg"
  //      }
  //     }
  //  );
  //  const res = await FileSystem.downloadAsync(``)




        }






  return (

   <View>
   {
    show ?

    <SafeAreaView style={{marginTop:25}}>   
    <FlatList
    data={data}
    renderItem={({item}) => (
      <PostCard
        item={item}
       
        // onPress={() =>
        //   navigation.navigate('HomeProfile', {userId: item.userId})
        // } I would instead inclde negio tiate button in App 
      />
    )}
  />  
   </SafeAreaView> 
:
<Text>
  Loading
</Text>
   }


   </View>
  )
}

