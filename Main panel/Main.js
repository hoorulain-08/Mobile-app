import { View, Text,Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import Chat from '../Screens/MessageChat'
import { Provide } from '../Context'
import { GetData } from '../Screens/GetData'
import { Data} from '../Screens/Data'
import { CombinedArray } from '../Screens/GetData'
import { ContextApi } from '../App'
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Drawer = createDrawerNavigator();
import { Platform } from 'react-native'
import * as FileSystem from 'expo-file-system';
import Main2 from './Main2'
import Modal from '../Screens/Modal'
import ModalNew from '../Screens/Modal'

export default function Main() {



 
  //  console.log("props in GetData js is below down = ")
    // console.log(emailNew);
    const navigation = useNavigation(); 
    const [testE,setTestE]=useState([]);
    const [post,setPost]=useState(null); 
    const [reg,setReg]=useState();
    const[uril,setUril]=useState([]);
    const [show,setShow]=useState(false);
    const [temp,setTemp]=useState(null);
    const[ret,setRet]=useState(null)
    let Id=[]; let arr=[]; 
    const load=useContext(ContextApi);
    props=load.country;

   let emailNew=load.country;
    //let temp=null;
    useEffect(()=>{
      if(post==null || temp==null){
 //     console.log("executing if condition of  FetchAPI  useEffect   ")
      showImage();
      FetchApi();
        
        
      }

     else if(temp==2){
    //   console.log("I have entered in temp==2 condition of else if  ")
// console.log(testE[0])
// console.log(testE[1])

const combinedArray = reg.map((regItem, index) => ({
  id: regItem.id,
  name: regItem.name,
  image: testE[index],
  ...post.find((postItem) => postItem.pID === regItem.id),
}));

const test=combinedArray.map((obj,index)=>({
id:obj.id,
name:obj.name,
post:obj.post
}))


console.log("combinedArray is below = ");
console.log(combinedArray);
// console.log("test is below = ");
// console.log(test);
// setRet(combinedArray);
load.setData(combinedArray);
// origional code line is below
setShow(true);
//  code line is below is just for testing changing true to false just for tewsting
// setShow(false);

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
console.log("Navigating to the other screen post is ");
console.log(post);
console.log("data is ");
console.log(load.data);
navigation.navigate('Form')
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
 // console.log("show images ")

  let id=1,filename;
   
  for(let i=0;i<post.length;i++){
id=i+1;

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

 console.log("in show image function pictures  URI is  down below ")
 console.log(result.name);
  arr[i]=result.uri;
  // console.log(arr[i]); 
   id++;
  }

 //console.log("post.length  is below in show images function down after loading all images ")
// console.log(post.length)
// console.log(arr[0])
setTestE(arr);
//console.log(testE)
setTemp(2)
 // setShow(tr.lue)
}
 async function FetchApi(){
    //  console.log("In Fetch Api function")
      fetch('http://192.168.1.32:3000/searchM', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body:JSON.stringify({
      country:emailNew
    })
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the data received from the API
     // console.log("GetData from above is here down = ");
      // console.log(data.posts); // Replace with your logic
      setPost(data.countries);
      setReg(data.posts);
     // display();

    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle the error
    });
   
//     let id=1,filename;
   
//     for(let i=0;i<post.length;i++){
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


    // arr[i]=result.uri;s
   //   console.log(arr[i]); 
 //    id++;
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
<>
{
  // show ? 
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
    
    <Drawer.Screen name='Modal' component={ModalNew}

screenOptions={{
headerShown:true,
}} 
options={{
headerStyle: {
  backgroundColor: '#6facbf'
}
}}
/>

{/* <Drawer.Screen name='chat' component={Chat}

screenOptions={{
headerShown:true,
}} 
options={{
headerStyle: {
  backgroundColor: '#6facbf'
}
}}
/> */}
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
{/* <Drawer.Screen name='chat' component={Chat}

screenOptions={{
headerShown:true,
}} 
options={{
headerStyle: {
  backgroundColor: '#6facbf'
}
}}
/> */}

{/* <Drawer.Screen
  name='chat'
  component={Chat}
  options={({ route }) => ({
    headerShown: true,
    headerStyle: {
      backgroundColor: '#6facbf',
    },
    headerTitle: () => {
      const { userName } = route.params || {};

      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
          {/* <Image
            source={customImage}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          /> 
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userName}</Text>
        </View>
      );
    },
  })}
/> */}

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
     <Drawer.Screen name="SignUp" component={Enter}
     screenOptions={{
      headerShown:true
    }} /> 
    
   
   
  </Drawer.Navigator>

  //ommenting the code just for testing purpose to show loading text when data is being fetched and images are being loaded
//  : <Text style={{marginTop:50,fontWeight:'bold'}}>
//  LOADING
//    </Text>


}
 
   
   </>

  )
}