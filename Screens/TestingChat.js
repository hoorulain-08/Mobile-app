import React, { useState, useEffect } from 'react';
import { View, TextInput, Button ,Text ,FlatList} from 'react-native';
// import * as SQLite from 'expo-sqlite';
import io from 'socket.io-client';
import db from '../Database/SqliteDb';

 export default function TestingChat(){

const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);
const [show ,setShow]=useState([]);
let test = [
];
// const [db, setDb] = useState(SQLite.openDatabase('NewTest.db'));
const socket = io('http://192.168.70.158:3000');




// useEffect(() => {
//   // Connect to the Socket.io server
//   socket.connect();

//   // Clean up the socket connection when the component unmounts
//   return () => {
//     socket.disconnect();
//   };
// }, []);

useEffect(() => {
    // Connect to the Socket.io server


console.log(test)
    socket.connect();
  
    // Listen for incoming messages
    socket.on('chatMessage', (message) => {
   //  setMessages((prevMessages) => [...prevMessages, message]);
    //    console.log("Messages stored in Array are here below  ") 
    //   console.log(messages)
    //   console.log("Message recevied from Backend are below ")
    //   console.log(message)

// Sqlite Database
db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO messages (content) VALUES (?)`,
      [message],
      (tx, result) => {
        console.log('Message saved to the database');
      },
      (error) => {
        console.log('Error saving message:', error);
      }
    );

    



  });

    });
  
  

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);


// useEffect(()=>{
  
//     db.transaction(tx => {
//         tx.executeSql('SELECT * FROM messages ', null,
//            (txObj, resultSet) =>{ setMessages((prevMessages) => [...prevMessages, resultSet.rows._array])
//           , console.log(resultSet.rows._array)},
//               console.log('2. UE Sqlite daba selec from messages new table '),
//               // setTest(resultSet.rows._array)
             
//           // setNames(test),
//            (txObj, error) => console.log(error)
//         );
//   // console.log(names);
//       });

// }


// )




const sendMessage = () => {
    

    db.transaction(tx => {
      console.log("Here is I am in sendMessage SQL lite Database")
        tx.executeSql('SELECT * FROM messages ', null,
           (txObj, resultSet) =>{
            setMessages((prevMessages) => [...prevMessages, resultSet.rows._array]),
              console.log("Messages Saved in Database are here below"),
             // console.log(resultSet.rows._array)
            console.log(' Sqlite daba select from messages new table '),
           // console.log(messages)
            console.log("saving messages below in show ")
            test=[...messages]
            setShow([test])
            console.log("show messages are here below")
            console.log(show)
            },
              // setTest(resultSet.rows._array)
          // setNames(test),
           (txObj, error) => console.log(error)
        );
  // console.log(names);
      });

      socket.emit('chatMessage', message);
      setMessage('');



  };


    return (
      <View>
       
        <View>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."

          />
          <Button title="Send" onPress={sendMessage} />


        </View>


        <Text style={{marginTop:50}}>
          OPEN aPP.JS to edit or Proceed with the code
        </Text>

        {test.map((item) => (
        <Text >{item.content}</Text>
      ))}
      </View>
    );
  
}

  



