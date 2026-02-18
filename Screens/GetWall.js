
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

 export default function GetWall (prop) {
console.log("hellow GetWall is down below ")
const [temp,setTemp]=useState(1);
// let im=null;


//   console.log("in wall js file below ");
// console.log(props.TestExp)
// here in this file API that would display the countries posts that matches the 
// same country the user have 
const route = useRoute();
// if(props){
//  const { TestExp } = route.params;
// console.log("Data is below down ... ") 
// console.log(TestExp)  
// }
function testing(){
  console.log("tetsing of wall is below down ")
  
  setTemp(3)
}
const resp=useContext(ContextApi);
const [show ,setShow]=useState(false);
const [flag,setFlag]=useState(0);
// const [data,setData]=useState(null)
let data=null
let country=resp.country;
// console.log("country received from login  is below  ")
// console.log(country)
// let imp=1;
// let tempCountry='pakistan'
//   imp=GetData(country);
//   console.log(imp);
//   if(imp==1){
//     console.log("imp has not loaded ")
//   }
//   else{
//     console.log("imp has   loaded  value is below ")
//     console.log(imp)
//     return imp
//   }
// console.log("the imp is down below")

// useEffect(()=>{
// Load()
  
// })

}




