
// import React from 'react'
import React, {useContext, useEffect, useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

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
import {Container} from '../Style/style';
import { GetData } from './GetData';
 import PostCard from '../Components/PostCard';
 import { useRoute } from '@react-navigation/native';
import { MyContext } from '../ContextApi/Context';
import { ContextApi } from '../App';
 export default function Wall (props) {

const route = useRoute();


const resp=useContext(ContextApi);
console.log('wall flag value in context Api is below')
console.log(resp.data)
let imp=resp.data;
console.log('imp is =  ')
console.log(imp)
const [show ,setShow]=useState(null);


let load=null;
let country=resp.country;
// console.log("loading data is below  ")
// console.log(load)
let tempCountry='pakistan'
// useEffect(()=>{
console.log(' wall flag value in context Api is below')
console.log(resp.flag)
// },[load])
//   if(resp.flag==null){
// func()    
//  }



//   if(show==null){
//     load=GetData(country); 

//  }
 function func(){
  console.log("func is replacing the data ")
 //  load=GetData('pakistan');
// console.log(re;
  setShow(1);
//  resp.setFlag(1) 
 }


// if(load==null){
//   console.log("loading posts");
//   let
//   console.log("value of K is down below ")
//   console.log(k)
//  if(imp !=null){
// k=k+1;
//   console.log("imp is not equall to null")
//   console.log(imp);
// //func();

//  }
// }
// else
// {
// //console.log("i have loaded components in GetData.js now in  wall file  ")

// //console.log(imp)
// if(flag==0){
//   console.log("in flag show the if condition is down below  value of flagis = " + flag)
//   showList();
// }

// }


let con=useContext(MyContext);
  const imageArray = [
   {userImg: require('../assets/users/user-3.jpg')} ,
   {userImg: require('../assets/users/user-1.jpg')},
   {userImg: require('../assets/users/user-4.jpg')},
    // Add more image sources as needed
  ];

  const renderItem = ({ item }) => (
    <Image source={item.userImg}  />
  );

function showList(){
  console.log("showList down below ")
setShow(true)
  setFlag(1)
}
 
  return (

    <SafeAreaView style={{marginTop:25}}>   
    <FlatList
    data={imp}
    renderItem={({item}) => (
      <PostCard
        item={item}
      
      />
    )}
   
  />  
   </SafeAreaView> 
  )
}

{/* <SafeAreaView style={{marginTop:25}}>   

    <View> 
     <Text>
      Hello World Loading 
     </Text>
          {/* {show?

   c
       :
         <Text style={{marginTop:50,marginLeft:50}}>
         Hellllo  World Loading
        </Text>

}
 


     </View>
    </SafeAreaView> */}


