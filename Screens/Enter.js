// import  { useContext } from "react"
// import {View,TextInput,Button,Text} from 'react-native'
// import { useState,useEffect } from "react"
// // import { Practice } from "../Context";
// import ChatScreen from "./chatScreen";
// import { executeNativeBackPress } from "react-native-screens";
// // const Context=React.createContext("default value")
// export default function HomeScreen({ navigation }) {
  
//   const [name,setName]=useState();
//   // const{val}=useContext(Practice);

// const [sw,setSw]=useState(false)
//   var temp=5;

//   function register(oj){

 

//     const obj={
//       name:name
//     }

//    console.log("oject is here below");
//    console.log(obj);

//   //  setSw(true);
//    navigation.navigate('ChatScreen');

//   //  fetch("http://192.168.43.52:3000/send",{ //replacing network IP address of existing network
//   //           method:'POST',
//   //           headers:{
//   //             Accept:'application/json',
//   //           "Content-Type": "application/json",
//   //           },
//   //           body:JSON.stringify(obj)
      
//   //         }
//   //         ).then((Response)=>{
//   //           console.log("sendin data to database server response is below");
//   //           console.log(Response.status);

//   //           if(Response.status=200){
//   //             console.log("executing Response status");
//   //           // <ChatScreen />


//   //           }
//   //           navigation.navigate('ChatScreen')
      
//   //         })
    
        




//   }

//   return (
//     <>

//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>

//       <TextInput 
//        value={name}
//        placeholder="Please register yourself "
//        onChangeText={(e)=>{setName(e)}}
      
//       />
//       <Button
//         title="Go to ChatScreen"
//         onPress={register}
//       />

//       {/* <Text>
//         {val}
//       </Text> */}
//     </View>
// </>

//   );
// }

import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'
import { useState } from 'react'
export default function  Enter(){
  // state = {
  //   username: '', password: '', email: '', phone_number: ''
  // }
  const [username_n,setUsername]=useState();
  const [password_n,setPassword]=useState();
  const [email_n,setEmail]=useState();
  const [phone_n,setPhone]=useState();
  
// let name,email,password,phone;
// const email='',password;
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val })
//   }
  async function signUp  ()  {
    console.log('value recevied from  the form is prop is ')
    console.log(username_n )

 let res=fetch("http://192.168.70.158:3000/send", {
  method: "POST",
  headers:{
            Accept:'application/json',
            'content-type':'application/json'
          },
  body: JSON.stringify({

        name:username_n,
      email:email_n,
    password:password_n,
    phone:phone_n
   }),
});
let resJson = await res.json();
if (resJson.status == 200) {
  // setName("");
  // setEmail("");
  setMessage("User created successfully");
} else {
  setMessage("Some error occured");
}


    // try {
    //   // here place your signup logic
    //   console.log('user successfully signed up!: ')
    // } catch (err) {
    //   console.log('error signing up: ')
    // }
  }
 

    return (
      <View style={styles.container}>
   
      <Text style={styles.TextStyle}> Enter Your name </Text>

        <TextInput
          style={styles.input}
          value={username_n}
          placeholder='Username'
          autoCapitalize="none"
          onChangeText={((val)=>{setUsername(val) })}
        />
         <Text> Enter Your Email </Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={((val)=>{setEmail(val) })}
        />
         <Text> Enter Your Phone Number </Text>
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={((val)=>{setPhone(val) })}
        />
         <Text> Enter Your Password </Text>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
        
          onChangeText={((val)=>{setPassword(val) })}
        />
 <Text> Please  RE-ENTER  Your Password </Text>
<TextInput
          style={styles.input}
          placeholder=' RE-Enter'
          secureTextEntry={true}
          autoCapitalize="none"
         
        />
      
        <Button
          title='Sign Up'
          onPress={signUp}
        />
      </View>
    )
  }


const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#E0E0E0',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle:{
 textAlign:'left'

  }
})