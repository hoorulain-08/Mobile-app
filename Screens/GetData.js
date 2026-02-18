import { View, Text, Platform ,Image,Button} from 'react-native'
 import React, { useContext, useEffect ,useState} from 'react';
import * as FileSystem from 'expo-file-system';
import { ContextApi } from '../App';


 export const GetData=(props)=> {
  


    const [testE,setTestE]=useState(['a']);
    const [post,setPost]=useState(2); 
    const [reg,setReg]=useState(2);
  let CombinedArray=2;
    const [show,setShow]=useState(false);
    const [temp,setTemp]=useState(2);
    const[ret,setRet]=useState(2)
     const load=useContext(ContextApi);
     props=load.country;

    let emailNew=load.country;
    let Id=[]; let arr=[]; 
    //let temp=2;
    useEffect(()=>{
     //console.log("value of post in useEffect  is below ")
    // console.log(post)
    //  console.log("value of reg in useEffect  is below ")
    //    console.log(reg)
      // FetchApi();
      //    showImage();
      if(post==2 || temp==2){
 //     console.log("executing if condition of  FetchAPI  useEffect   ")
      showImage();
      FetchApi();
        
        
      }

     else if(temp==2){ 
    //   console.log("I have entered in temp==2 condition of else if  ")
// console.log(testE[0])
// console.log(testE[1])

 CombinedArray = reg.map((regItem, index) => ({
  id: regItem.id,
  name: regItem.name,
  image: testE[index],
  ...post.find((postItem) => postItem.pID === regItem.id),
}));

// console.log("CombinedArray is below = ");
// console.log(CombinedArray);
load.setData(CombinedArray);
setRet(CombinedArray)
// 
// console.log("GetData the value of  data in context Api is below ")
// console.log(load.data)
// if(ret!=2){
// load.setFlag(1);

// }


//         for(let i=0;i<post.length;i++){
//           console.log("pictures  URI is  down below in useEffect of the temp==2 ")

// console.log(arr[i])
//         }
      }
      //  else if(temp==2){
      //   showImage();
      //  }
      //  else if(post==2){
      //   // showImage();
      //   FetchApi();
      //  }
// else if(temp==2){
//   console.log("in else if of useEffect and all imaged nad data has been fetched ")
// }



    }

    )
function display(){
console.log("posts are below");
// console.log(post);
// console.log("registered items are below")
// console.log(reg[1].image)

// console.log("registered id are below ")
// console.log(reg);
let temp=0;
for(let i=0;i<post.length;i++){

      console.log(arr[i]); 
temp=i;
     }
 
if(temp+1==post.length){
  console.log("shoing images executing if")
 // setShow(true)
}

console.log("temp  is below down")
console.log(temp)
console.log("post.length  is below down")
console.log(post.length)
console.log("show  is below down")
console.log(show)
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

    const localhost= Platform.OS === "android" ? "192.168.0.104" : "192.168.0.104";     
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

 //console.log("pictures  URI is  down below ")

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
      fetch('http://192.168.0.104:3000/searchM', { 
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
   
    let id=1,filename;
   
    for(let i=0;i<post.length;i++){
 id=i+1;

      const localhost= Platform.OS === "android" ? "192.168.0.104" : "192.168.0.104";     
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

 //   console.log("pictures  URI is  down below ")
 
    arr[i]=result.uri;
   //   console.log(arr[i]); 
     id++;
    }

   // display();
  //   const localhost= Platform.OS === "android" ? "192.168.43.250" : "192.168.43.250";     
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

// console.log("the value has to be returned is here down")
// console.log(ret)
return ret

//will remove this return Later 

// const seeImage=()=>{
//   console.log("In the see images function ")
//   console.log(testE)
// setShow(true)
// }


   }

//    export {GetData,y}