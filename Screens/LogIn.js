
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Image
} from 'react-native'
import { useState ,useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ContextApi } from '../App';
 import * as FileSystem from 'expo-file-system'
export default function LogIn() {
   const [im, setIm] = useState(null);
     const resp=useContext(ContextApi);
     const navigation = useNavigation(); 
  const [username_n,setUsername]=useState();
  const [password_n,setPassword]=useState();
  const[kite,setKite]=useState();
  const[leng,setLeng]=useState(3)
  // let xy=generateRandomString();
  // console.log(xy);
let counter=0,count=0;

// while(count<=8){

// }

async function Test(){
  let x=show()
  // console.log("show result is below down ")
  // console.log(x._j);
  let ret=x._j;
  return ret
}




const  show=async()=>{

  console.log("show is down = ")



  let display;
  display=generateRandomString()+'-';
//  console.log("leng is down below = ")
// console.log(leng);
// console.log("kite is down below = ")
// console.log(kite);
// if(kite==leng){
//   display=generateRandomString()
// }
// else{
//  display=generateRandomString()+'-';
// }
  
//  console.log("display is down below = ")
//  console.log(display)

return display

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

   async function LoginGo  ()  {

    
     console.log('value recevied from  the form is prop is ')
     
     navigation.navigate('Main'); //This line is just for navigation testing purpose and would be removed after testing the login functionality
    //     // console.log(username_n 
//     let c=0;
//     let temp='';
//     while(c<=3){
      
//     //  console.log("while is = ")
//   //  let get=Test()._j;
//   if(c==3){
//     console.log("executing if down  there ")
//     let display=generateRandomString()
//     console.log("display  down  there ")
//     console.log(display)
//     temp=temp+display;
//     console.log(temp);
//   }
// else{
  
//   console.log("executing else down  there ")

//   let display=generateRandomString()+'-';
//     console.log("display  down  there ")
//     console.log(display)
//     temp=temp+display;
//     console.log(temp);
// }
 
//      let str = "HLX7an-uDWuOd-E10R8W-tXWl92-";
    
// //   let   str = "HLX7an-uDWuOd-E10R8W-tXWl92-";
// // let modifiedStr = str.replace(/-(?=[^-]+$)/, "");

// // console.log(modifiedStr);
// //let parts = str.split("-");
// // console.log("parts are below ")
// // console.log(parts);
// //let lastWord = parts[parts.length - 1];
// // console.log("lastWord is below = ");
// // console.log(lastWord);
// //let modifiedLastWord = lastWord.replace("-", "");
// //Construct the modified string
// //parts[parts.length-1] = modifiedLastWord;
// // modifiedStr = parts.join("");
// // modifiedStr=modifiedStr.replace()
// console.log("c  value is = ")
// console.log(c);

// //       {'/n'}
      



// c++;

// // console.log("c end is below = ")
// // console.log(c)


//     }
   
        const res= await fetch('http://192.168.1.32:3000/login',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'content-type':'application/json'
          },
          body:JSON.stringify({
            name:username_n,
            password:password_n,
          }
            
          )
        }).then(async(response)=>{
          // console.log("response from frontned status is ")
          // console.log(response.status)
         x= response
          // console.log(response.)
        })
        const    y = await x.json();
    console.log("response id  is below ");
    console.log(x.status)
        if(x.status==200)
        {   
            resp.setId(y.id)
            resp.setCountry(y.country);
            resp.setNam(username_n)
            //resp.seImage(i.image)
            // console.log("this value of y in if is below")
          //  console.log(y.image.uri)
    
        
        }else if(x==400){
            alert('Invalid Username or Password')
        }
       
 getImage();
  // navigation.navigate('Main');
      }


      const getImage=async()=>{
        console.log("getImage is below")
        const filename = generateRandomString()+ '.mp4';
        
        const localhost = Platform.OS === "android" ? "192.168.1.32" : "192.168.1.32";
        let id=resp.id;  
        console.log(id)
        const result = await FileSystem.downloadAsync(
          `http://${localhost}:3000/image/${id}`,
          FileSystem.documentDirectory + filename,
          {
           headers: {
             "content-type": "image/jpeg"
           }
          }
       );
   
       console.log("taken image is here uri is below")
       console.log(result)
       setIm(result.uri);
       resp.setImage(result.uri);
       navigation.navigate('Main');
   
      }




    return (
      <View style={styles.container}>
   
      <Text style={styles.TextStyle}> Enter Your User Name </Text>

        <TextInput
          style={styles.input}
          value={username_n}
          placeholder='Username'
          autoCapitalize="none"
          onChangeText={((val)=>{setUsername(val) })}
        />
         <Text> Enter Your Password </Text>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
        
          onChangeText={((val)=>{setPassword(val) })}
        />   
        <Button
          title='Log In'
          onPress={LoginGo}
        />
   
{/* {im&&<Image source={{uri:im}}/>}      */}
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





