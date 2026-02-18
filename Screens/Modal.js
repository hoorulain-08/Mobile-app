import React ,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../Style/MessageStyles';
import { useNavigation } from '@react-navigation/native';
import  db from '../Database/SqliteDb';
import { useRoute } from '@react-navigation/native';
// import  fb from '../Database/SqliteDb';
import fb from '../Database/SqliteNew';
import SocketIOClient from 'socket.io-client';
import { ContextApi } from '../App';
//replacing current network IP

const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Format the time as a string with leading zeros
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return formattedTime;
};

// Usage examplea
const currentTime = getCurrentTime();
console.log("modal.js currentTime  is below down = ")
console.log(currentTime);
console.log("modal.js newDate is below down = ")
const date=new Date();

console.log(date);





const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe', 
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const ModalNew = ({navigation}) => {
  const socket = SocketIOClient('http://192.168.1.32:3000'); 
  const [
    messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);

  const nav=useNavigation();
  const [name, setName] = useState([]);
  const [test,setTest]=useState([]);



//   if(test && name){
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
  
//     const combined = [...CombineChat, ...ModifyTest];
  
  
  
//     console.log("the value of CombinedArray in loaded chat if condition is below = ")
//     console.log(combined);







// }
  // useEffect(()=>{
  //   console.log("UE 2")
  //   db.transaction(tx => {
  //     tx.executeSql('SELECT * FROM messageN ', null,
  //        (txObj, resultSet) =>{ 
  //         setTest(resultSet.rows._array) 
  //         console.log("In start of file messsages retrived from sqlite db  are below =  ")
  //         console.log(resultSet.rows._array)
          
         
    
      
  //     },
      
  //        (txObj, error) => console.log(error)
  //     );
  //   // console.log(names);
  //   });
  // },[])
  



  useEffect(() => {
    // Connect to the Socket.io server
 
    

console.log("1 UE")

// fb.transaction(tx => {
//   tx.executeSql('SELECT * FROM InMessageN ', null,
//      (txObj, resultSet) =>{
//       setName(resultSet.rows._array)
    
//     console.log("modal.js start of file messages get  from  sqlIte InMessage are down below"),
//     console.log(resultSet.rows._array)
  
//   },
//         // console.log('1.'),
//         // setTest(resultSet.rows._array)
       
//     // setNames(test),
//      (txObj, error) => console.log(error)
//   );
// // console.log(names);
// })

// if(test && name){
//     console.log("value saved in database name is below  = ")
//     console.log(name)
//     console.log("test is = below ")
//     console.log(test);
// }

    socket.connect();
    socket.on('chatMessage', (message) => {

// Sqlite Database


// console.log("newCount is below = ");
// console.log(newCount)
// db.transaction((tx) => {
//     tx.executeSql(
//       `INSERT INTO messageN (sendId ,recvId , msg ) values (?,?,?)`,
//       [sendId,recvId,message[0].message],
//       (tx, result) => {
//         console.log('Message saved to the db database');
//      // temp(2);
//       },
//       (error) => {
//         console.log('Error saving message:', error);
//       }
//     );

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM messageN ', null,
         (txObj, resultSet) =>{ setTest(resultSet.rows._array) 
          console.log("modal.js messsages retrived from sqlite db  are below =  ")
          console.log(resultSet.rows._array)
          
         
  
      
      },
      
         (txObj, error) => console.log(error)
      );
// console.log(names);
    });

//   });


    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);





    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => nav.navigate('chat', { 
              userName: item.userName,
             userImg: item.userImg ,
             sendId:item.id})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default ModalNew;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
