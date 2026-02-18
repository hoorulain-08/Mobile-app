import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform,FlatList ,SafeAreaView} from 'react-native';
// import { createStackNavigator } from '@react-navigation/native';
import SocketIOClient from 'socket.io-client';
import { useState, useEffect } from 'react';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import  db from '../Database/SqliteDb';
import { useRoute } from '@react-navigation/native';
// import  fb from '../Database/SqliteDb';
import fb from '../Database/SqliteNew';
import { ContextApi } from '../App';
export default function ChatScreen() {
  const route=useRoute()
  let sendId=route.params.sendId;
  let recvIdContext=useContext(ContextApi);
  let chatLoading=useContext(ContextApi);
let recvId=recvIdContext.id;
const [old,setOld]=useState(0);
const [newCount,setNew]=useState(0);

//assign send Id to each user to retrieve messages from databse 
let sendNew=recvId;
let recvNew=sendId;
// console.log("sendNew is given == ")
// console.log(sendNew)
// console.log("recvNew is given == ")
// console.log(recvNew)

  //const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);
  let [flatListItems, setFlatListItems] = useState([]);
  const [test,setTest]=useState([]);
  let r=0; 
  // const avdId = DeviceInfo.getSerialNumber();
 const [count,setCount]=useState(true)
  const courses = [
    "Full Stack Developement Program",
    "Python Automation Testing Program",
    "UI/UX Program",
  ];

  var tab=0;
  const socket = SocketIOClient('http://192.168.1.32:3000'); //replacing current network IP
  const [
    messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [y,sety]=useState(1);
 let x={id:2,name:"nalisha"}
  const handleSendMessage = () => {
    sendMessage(message);
    setMessage(''); 
  };
const [v,setV]=useState(0)
const timestamp = new Date();

  // if(old!=newCount)
  // {
  //   console.log("some new update is available value of old and newCount below respectvely")
  //   console.log(old)
  //   console.log(newCount);
  //   setOld(newCount)
  // }

// useEffect(()=>{
//   console.log("UE 2")
//   db.transaction(tx => {
//     tx.executeSql('SELECT * FROM messageN ', null,
//        (txObj, resultSet) =>{ 
//         setTest(resultSet.rows._array);
//         console.log("In start of file messsages retrived from sqlite db  are below =  ")
//         console.log(resultSet.rows._array);
//     },
    
//        (txObj, error) => console.log(error)
//     );
//   // console.log(names);
//   });
// },[])




//   if(chatLoading.chatLoad==0){
//     console.log("in IF condition of chatLoading")
//    // console.log()
//     //in this condition we will have to take input from other databses the 
//     //one which is saving the sent chat and the one which is saving receive chats 
//     //
  
//     // console.log("name is = below ")
//     // console.log(name)
//     if(name && test){
       
//       console.log("value saved in database name is below = ")
//       console.log(name)
//       console.log("test is = below ")
//       console.log(test);
//       const ModifyTest=test.map((obj)=>({
//         id:obj.sendId,
//         text:obj.msg,
//         user:{
//                 id:obj.recvId
//         }
  
       
        
//       }))
//       console.log("the value of test is here below down = ")
//       console.log(ModifyTest)
//       const CombineChat=name.map((obj)=>({
//         id:obj.sendNew,
//         text:obj.msg,
//         user:{
//                 id:obj.recvNew
//         }
//   ,   
//       }))
  
//       const combinedArray = [...CombineChat, ...ModifyTest];

   

//       console.log("the value of CombinedArray in loaded chat if condition is below = ")
//       console.log(combinedArray);
//  //     setMessage(combinedArray);
//   //   chatLoading.setChat(3);
// let k=Stop();
// console.log("value of k is below ")
// console.log(k)
// //setV(k);
//     }
//     else{
//       console.log("value has not loaded yet ")
//     }
  
    
//   }
  useEffect(() => {
    // Connect to the Socket.io server
 
    

console.log("1 UE")

// fb.transaction(tx => {
//   tx.executeSql('SELECT * FROM InMessageN ', null,
//      (txObj, resultSet) =>{
//       setName(resultSet.rows._array)
    
//     console.log("start of file messages get  from  sqlIte InMessage are down below"),
//     console.log(resultSet.rows._array)
  
//   },
//         // console.log('1.'),
//         // setTest(resultSet.rows._array)
       
//     // setNames(test),
//      (txObj, error) => console.log(error)
//   );
// // console.log(names);
// })

// if(name && test){
       
//   console.log("value saved in database name is below = ")
//   console.log(name)
//   console.log("test is = below ")
//   console.log(test);
//   const ModifyTest=test.map((obj)=>({
//     id:obj.sendId,
//     text:obj.msg,
//     user:{
//             id:obj.recvId
//     }

   
    
//   }))
//   console.log("the value of test is here below down = ")
//   console.log(ModifyTest)
//   const CombineChat=name.map((obj)=>({
//     id:obj.sendNew,
//     text:obj.msg,
//     user:{
//             id:obj.recvNew
//     }
// ,   
//   }))

//   const combinedArray = [...CombineChat, ...ModifyTest];



//   console.log("the value of CombinedArray in loaded chat if condition is below = ")
//   console.log(combinedArray);
// //     setMessage(combinedArray);
// //   chatLoading.setChat(3);
// // let k=Stop();
// // console.log("value of k is below ")
// // console.log(k)
// //setV(k);
// }
// else{
//   console.log("value has not loaded yet ")
// }

    socket.connect();
    // console.log("Messages stored in Array are here below  ") 
    // Listen for incoming messages
    socket.on('chatMessage', (message) => {
   // setMessages((prevMessages) => [...prevMessages, message]);
     console.log("Messages stored in Array are here below  ") 
     console.log(message)
     console.log("Message recevied from Backend are below ")
     console.log(message[0].message)
     console.log(" receviTime stamp received  from Backend is below ")
     console.log(message[0].timestamp)
// Sqlite Database


// console.log("newCount is below = ");
// console.log(newCount)
db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO messageN (sendId,recvId,msg,timestamp) values (?,?,?,?)`,
      [sendId,recvId,message[0].message,message[0].timestamp],
      (tx, result) => {
        console.log('Message saved to the db database');
     // temp(2);
      },
      (error) => {
        console.log('Error saving message:', error);
      }
    );


    db.transaction(tx => {
      tx.executeSql('SELECT * FROM messageN ', null,
         (txObj, resultSet) =>{ setTest(resultSet.rows._array) 
          console.log("messsages retrived from sqlite db  are below =  ")
          console.log(resultSet.rows._array)
          
         
  
      
      },
      
         (txObj, error) => console.log(error)
      );
// console.log(names);
    });

  });


    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);



// useEffect(()=>{
// console.log("uE 3")
// if(name && test){
       
  
//   const ModifyTest=test.map((obj)=>({
//     id:obj.sendId,
//     text:obj.msg,
//     user:{
//             id:obj.recvId
//     }

   
    
//   }))
//   // console.log("the value of test is here below down = ")
//   // console.log(ModifyTest)
//   const CombineChat=name.map((obj)=>({
//     id:obj.sendNew,
//     text:obj.msg,
//     user:{
//             id:obj.recvNew
//     }
// ,   
//   }))

//   const combinedArray = [...CombineChat, ...ModifyTest];



//   console.log("the value of CombinedArray in loaded chat if condition is below = ")
//   console.log(combinedArray);
// //     setMessage(combinedArray);
// //   chatLoading.setChat(3);
// // let k=Stop();
// // console.log("value of k is below ")
// // console.log(k)
// //setV(k);

// // setMessages(combinedArray);
// }
// else{
//   console.log("value has not loaded yet ")
// }


// },[])
  function temp(prop){
    // console.log("In temp function below pprop is below");
    // console.log(prop);
    if(prop==1)
    {
      // console.log("value saved sent messages are below")
      // console.log(name)
    }

    if(prop==2)
    {
      // console.log("received  messages are below")
      // console.log(test)
    }

    // setMessages([
    //   {
    //     _id: 1, //sender id 
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2, //recevier Id
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    //   {
    //     _id: 2, //sender Id
    //     text: 'Hello world',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 1, //receiver id
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
  }
  // console.log("received  messages in test  are below")
  // console.log(test);
 function  Stop(prop){
  console.log("the value of prop in stop function is below = ")
  console.log(prop)
  // console.log(combinedArray);
  console.log("changing value of v")
  let x=y+1;
  console.log("value of x is below ")
  console.log(x);
  setMessages(prop)
// sety(x);
// return x ;
  }
  const sendMessage = () => {
    let obj=[{sendNew:sendNew,recvNew:recvNew,message:message,timestamp:timestamp}]
    console.log("object value is below down = ")
    console.log(obj)
      fb.transaction(tx => {
        tx.executeSql(
          `INSERT INTO InMessageN (sendNew,recvNew,msg,timestamp) values (?,?,?,?)`,
          [sendNew,recvNew,message,timestamp],
          (tx, result) => {
            console.log('Message saved to the fb database');
            temp(1);
          },
          (error) => {
            console.log('Error in fb  saving message:', error);
          }
        );
      });
      fb.transaction(tx => {
        tx.executeSql('SELECT * FROM InMessageN ', null,
           (txObj, resultSet) =>{ setName(resultSet.rows._array)
          
          console.log("chatScreen messages get  from  sqlIte InMessage are down below"),
          console.log(resultSet.rows._array)
        
        },
              // console.log('1.'),
              // setTest(resultSet.rows._array)
             
          // setNames(test),
           (txObj, error) => console.log(error)
        );
  // console.log(names);
      })
console.log("here before emit")
      socket.emit('chatMessage', obj);
      setCount(true)
      setMessage('');
   
  };


// if(name && test){
       
//   console.log("value saved in database name is below = ")
//   console.log(name)
//   console.log("test is = below ")
//   console.log(test);
//   const ModifyTest=test.map((obj)=>({
//     id:obj.sendId,
//     text:obj.msg,
//     user:{
//             id:obj.recvId
//     }

   
    
//   }))
//   console.log("the value of test is here below down = ")
//   console.log(ModifyTest)
//   const CombineChat=name.map((obj)=>({
//     id:obj.sendNew,
//     text:obj.msg,
//     user:{
//             id:obj.recvNew
//     }
// ,   
//   }))

//   const combinedArray = [...CombineChat, ...ModifyTest];



//   console.log("the value of CombinedArray in loaded chat if condition is below = ")
//   console.log(combinedArray);
//   console.log("the value of y is below = ")
//   console.log(y);
//   if(messages){
    
//   //  Stop(combinedArray);
//   }
//   console.log("messages are below ")
//   console.log(messages)
// //     setMessage(combinedArray);
// //   chatLoading.setChat(3);
// // let k=Stop();
// // console.log("value of k is below ")
// // console.log(k)
// //setV(k);
// }
// else{
//   console.log("value has not loaded yet ")
// }

// useEffect(()=>{
//   console.log("UE 3")
//   console.log("value of UseEffect 3 is below ")
//   console.log(count);
//   if(name && test ){
       
//     console.log("value saved in database name is below  = ")
//     console.log(name)
//     console.log("test is = below ")
//     console.log(test);
//     const ModifyTest=test.map((obj)=>({
//       id:obj.sendId,
//       text:obj.msg,
//       user:{
//               id:obj.recvId
//       }
  
     
      
//     }))
//     console.log("the value of test is here below down = ")
//     console.log(ModifyTest)
//     const CombineChat=name.map((obj)=>({
//       id:obj.sendNew,
//       text:obj.msg,
//       user:{
//               id:obj.recvNew
//       }
//   ,   
//     }))
  
//     const combinedArray = [...CombineChat, ...ModifyTest];
  
  
  
//     console.log("the value of CombinedArray in loaded chat if condition is below = ")
//     console.log(combinedArray);
//     console.log("the value of y is below = ")
//     console.log(y);
//     // if(messages){
      
//     //   Stop(combinedArray);
//     // }
//     console.log("messages are below ")
//     console.log(messages)
//      //  setMessages(combinedArray);
//   //     setCount(false);
//   //   chatLoading.setChat(3);
//   // let k=Stop();
//   // console.log("value of k is below ")
//   // console.log(k)
//   //setV(k);
//   }
//   else{
//     console.log("value has not loaded yet ")
//   }
// })





  return (
    <SafeAreaView style={{ margin: 10,marginTop:50 }}>

    
        
      <View style={styles.container}>
  
      </View>
      <Text>
        .
        .
        .
        .
        Chat Screen 2 TWO</Text>
{/* 
        <TextInput value={currentName} placeholder='name' onChangeText={setCurrentName} /> */}
      {/* <Button title="Add Name" onPress={addName} /> */}
      
      <TextInput
        value={message}
        placeholder='Enter message'
        onChangeText={(val) => { setMessage(val) }}
        style={{ borderWidth: 1, borderColor: 'black', padding: 12, borderRadius: 4 }}
      />
      <Button
        title="Send"
        onPress={sendMessage}
      />

      {/* <View>
      // This method is effecive   only when we  have 1 directional  now to display 
      // two or more directional  arrays   we hae to use flat lis in react natie 
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View> */}


{/* <Text>
  These messages are displayed from Backend
</Text>
<FlatList 
data={test}
renderItem={(e)=>{
  return(
     <View><Text>{e.index.id}</Text>
  <Text>{e.item.name}</Text>
  </View>
  )
}}
/>

<Text>
  {'\n'}
</Text> */}

{/* <Text style={{color:'green'}}> 
  This Following List is From FrontEnd
</Text>
<FlatList 
style={{color:'red'}}
data={name}
renderItem={(e)=>{
  return(
     <View><Text>{e.index.id}</Text>
  <Text>{e.item.name}</Text>
  </View>
  )
}}
/> */}


    </SafeAreaView>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
});