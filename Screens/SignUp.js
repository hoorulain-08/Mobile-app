import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { useState } from 'react'
// import Modal from 'react-native-modal';
export default function     SignUp(){
  const [name,setUsername]=useState();
  const [password,setPassword]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  

//   onChangeText = (key, val) => {
//     this.setState({ [key]: val })
//   }
  async function signUp  ()  {
   // const { username, password, email, phone_number } = this.state
    try {

console.log("In SignUp Function is below")
console.log(name + ' ' + email + ' = ' +phone+' = '+ password)
fetch('http://192.168.70.158:3000/send',{
  method:'POST',
  headers:{
    Accept:'application/json',
    'content-type':'application/json'
  },
  body:JSON.stringify({
    name:name,
    email:email,
    phone:phone,
    password:password
  }
    
  )
}).then((response)=>{
  console.log("response from send signup api is below ")
  console.log(response.status)
})
    
    //  console.log('user successfully signed up!: ')
    } 
    
    
    
    catch (err) {
      console.log('error signing up: ')
    }




  }
 

    return (
      <View style={styles.container}>
        <Text style={styles.InText}>
          Enter Your Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          onChangeText={(val)=>setUsername(val)}
        />
       
        <Text style={styles.InText}>
          Enter Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={(val)=>setEmail(val)}
        />
        <Text style={styles.InText}>
          Enter Your Phone
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          onChangeText={(val)=>setPhone(val)}
        />
        <Text style={styles.InText}>
          Enter Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(val)=>setPassword(val)}
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
    backgroundColor: '#b0c4de',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  InText:{
color:'black',
fontWeight:'bold'

  },
  modal:{
    fontWeight:'bold',
    borderWidth: 1,
     borderColor: 'black',
      borderRadius: 10,
      borderHeight:10,
  }
})