
import { View, Text,Button,ImageBackground,TouchableOpacity } from 'react-native'
import React, { useEffect ,useState,useContext} from 'react'
// import { GetData } from './GetData'
import { ContextApi } from '../App';
 import  {style}  from '../Style/style';
 
export default function Home() {
  const resp=useContext(ContextApi)
  const [test,setTest]=useState([])
  const [temp,setTemp]=useState(false)
//  let emailNew='bengladesh';
  // let LoginId=resp.id;
//  console.log("LogIn id in Home file is = " + LoginId)
  
  //this is just supposed login id which actually would be obtain through ContextApi  
// let imp=GetData('pakistan')// countries  would also be replaced through context Api 
// console.log("Home file is here below")
// console.log(imp)
let j=false;


 
 //later this would be replaced with the country 

function disp(){


 for(let i=0;i<imp.length;i++){
    // console.log("temp i is = ")
    // console.log(imp[i])
    if(LoginId==imp[i].id){
//  console.log('entering IF of the loop LogIn id is = ' +LoginId +"test and test[i] is = "+imp[i].id)
      setTest([...test,imp[i]])
    //  console.log(test)
      j=true
    }


  }




}

  return (

    <ImageBackground
    source={require('../assets/Back.png')} // Replace with the path to your image
style={style.background}
  >
    <View>

      {/* <View>
    <Button  title='Show results' onPress={disp}/>
      </View> */}
      <TouchableOpacity  style={style.reqBtn}>
        <Text>
          ASK AUDIANCE 
        </Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
  )
}

