import React, { useState, useEffect } from 'react';
import { Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import { saveMessage, getMessages } from '../Database/SqliteNew';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SocketIOClient from 'socket.io-client';
import {View} from 'react-native'
const socket=SocketIOClient("http://192.168.1.32:3000")

function Chat ()  {
  const [messages, setMessages] = useState([]);
// const k=1;
// console.log("value of k is = ");
// console.log(k);

const renderSend = (props) => {
  return (
    <Send {...props}>
      <View>
        <MaterialCommunityIcons
          name="send-circle"
          style={{marginBottom: 5, marginRight: 5}}
          size={32}
          color="#2e64e5"
        />
      </View>
    </Send>


  );
};

const renderBubble = (props) => {  return (
  <Bubble
    {...props}
    wrapperStyle={{
      right: {
        backgroundColor: '#2e64e5',
      },
    }}
    textStyle={{
      right: {
        color: '#fff',
      },
    }}
  />
);

};


const scrollToBottomComponent = () => {

  return(
    <FontAwesome name='angle-double-down' size={22} color='#333' />
  );
}
  const generateRandomString = () => {
    console.log("In Generate function is below down ")
     length=5;
   //  setLeng(length);
     let result = '';
     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     console.log(charactersLength)
     let counter=0;
     while(counter<=length){
       result+=characters.charAt(Math.floor(Math.random()*charactersLength));
       // console.log("maths random values are below ")
       // let rand=Math.random()
       // console.log("rand is = ")
       // console.log(rand)
       // let char=rand*charactersLength
       // console.log("char is = ")
       // console.log(char)
       // let flor=Math.floor(char)
       // console.log(flor)
       // let ch=characters.charAt(flor);
       // console.log("ch is = ")
       // console.log(ch)
 
       counter+=1
       
     }
    return result
   };

 async function  onRecv (newMessages = []) {
    console.log("on REcv newMessages = ")
    console.log(newMessages[0]._id)
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, {
        ...newMessages[0],
        _id:newMessages[0].user._id,
      })
    );
    
      try {
        const messageId = await saveMessage(
    
          newMessages[0]._id,
          newMessages[0].user._id, // Assuming user 1 and 2 //later we will place logiN sender Id through contextApi
          // newMessages[0].user._id === 1 ? 2 : 1,
          newMessages[0].text
        );


        // setMessages((prevMessages) =>
        //   GiftedChat.append(prevMessages, {
        //     ...newMessages[0],
        //     _id:newMessages[0].user._id,
        //   })
        // );
      } catch (error) {
        console.log('Error saving message:', error);
      }
    
      
  }
  
async function save(newMessages = []){
  try {
    const messageId = await saveMessage(
      newMessages[0].user._id,
      newMessages[0].user._id === 1 ? 2 : 1, // Assuming user 1 and 2
      newMessages[0].text
    );
    console.log("save NewMessage is below")
    console.log(newMessages)
    console.log("save messageId is below")
    console.log(messageId)
    //appending messages in gifted chat 
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, {
        ...newMessages[0],
        _id: messageId,
      })


      
    );
  } catch (error) {
    console.log('Error saving message:', error);
  }
}
//   const onSend = async (newMessages = []) => {


//     //saving in sqlite 
//     try {
//       const messageId = await saveMessage(
//         newMessages[0].user._id,
//         newMessages[0].user._id === 1 ? 2 : 1, // Assuming user 1 and 2
//         newMessages[0].text
//       );
//       console.log("NewMessage is below")
//       console.log(newMessages)
//       console.log("messageId is below")
//       console.log(messageId)
//       //appending messages in gifted chat 
//       setMessages((prevMessages) =>
//         GiftedChat.append(prevMessages, {
//           ...newMessages[0],
//           _id: messageId,
//         })
//       );
//     } catch (error) {
//       console.log('Error saving message:', error);
//     }
// //    let obj=[{send:newMessages[0]._id,recv:3,message:newMessages[0].text}]

//     console.log("here before emit")
//    // socket.emit('chatMessage', obj);



//   };

useEffect(() => {
  socket.connect();

  socket.on('chatMessage',(message)=>{
   
  
    let c=0;
      let temp='';
      while(c<=4){
        
      //  console.log("while is = ")
    //  let get=Test()._j;
    let display;
    if(c==4){
      console.log("executing if down  there ")
       display=generateRandomString()
   
      temp=temp+display;
    //  console.log(temp);
    }
  else{
    
    console.log("executing else down  there ")
  
    display=generateRandomString()+'-';
     temp=temp+display;
  }
  
       let str = "HLX7an-uDWuOd-E10R8W-tXWl92-";
      
  //   let   str = "HLX7an-uDWuOd-E10R8W-tXWl92-";
  // let modifiedStr = str.replace(/-(?=[^-]+$)/, "");
  
  // console.log(modifiedStr);
  //let parts = str.split("-");
  // console.log("parts are below ")
  // console.log(parts);
  //let lastWord = parts[parts.length - 1];
  // console.log("lastWord is below = ");
  // console.log(lastWord);
  //let modifiedLastWord = lastWord.replace("-", "");
  //Construct the modified string
  //parts[parts.length-1] = modifiedLastWord;
  // modifiedStr = parts.join("");
  // modifiedStr=modifiedStr.replace()
  console.log("c  value is = ")
  console.log(c);
  
  //       {'/n'}
        
  
  
  
  c++;
  
  // console.log("c end is below = ")
  // console.log(c)
  
  
      }
  
   const mapMessage= message.map((msg)=>({
    
    _id: temp, //sender id 
  
    text: message[0].message,
    createdAt:new Date().toISOString(),
    user: {
      // _id: message[0].recv, //recevier Id,
     _id:message[0].send, 
      name: 'MESSAGE2 FROM BACKEND',
      avatar: 'https://placeimg.com/140/140/any',
    },
  
   }))
  
  
  
  
   console.log("messageMap is below ")
   console.log(mapMessage)
  onRecv(mapMessage);
console.log("going to onSend function from backend")
//onSend(mapMessage)
   
  
  
    // setSe(se+1);
    //we have to make the message in the same format as in gifted chat when call onSend function 
  // onRecv(mapMessage);
  
  //  fb.transaction((tx)=>{
  //   tx.executeSql('INSERT INTO InMessageN (send,recv,msg,timestamp) VALUES (?,?,?,?)',[recv,send,message[0].message,message[0].timestamp],
  //   (_,resultNew)=>{
  //     console.log("data from backend  inserted  suceesfully from backend  ")
  //   }
  
  
  //   )
  //  }
  
  //  )
  })








  const fetchMessages = async () => {
   
    try {
      const storedMessages = await getMessages();

       console.log("storedMessages are below ")
    console.log(storedMessages);
    const sit=   storedMessages.map((message) => ({
      _id: message.id,
      text: message.message,
      createdAt: new Date(message.timestamp),
      user: {
        // _id: message.sender,
         _id: message.sender,
        name: message.sender,
      },
    }))

    console.log("sit is below")
    console.log(sit)
      setMessages(
        storedMessages.map((message) => ({
          _id: message.id,
          text: message.message,
          createdAt: new Date(message.timestamp),
          user: {
             _id: message.sender,
            //  _id: k,
            name: "ghjg",
          },
        }))
      );
    } catch (error) {
      console.log('Error fetching messages:', error);
    }
  };
 fetchMessages();



}, []);

const onSend = async (newMessages = []) => {
console.log("onSend newMessages = ")
console.log(newMessages)


  try {
    const messageId = await saveMessage(
 
      newMessages[0].user._id,
      newMessages[0].user._id === 1 ? 2 : 1, // Assuming user 1 and 2
      // newMessages[0].user._id === 1 ? 2 : 1,
      newMessages[0].text
    );
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, {
        ...newMessages[0],
        _id: messageId,
      })
    );
  } catch (error) {
    console.log('Error saving message:', error);
  }

  let obj=[{send:10,recv:12,message:"hello there jjhg vnbvgnv"}]

    console.log("here before emit")
    socket.emit('chatMessage', obj);





};


  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1, // Assuming user 1
      }}

      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}


    />
  );
};

export default Chat;