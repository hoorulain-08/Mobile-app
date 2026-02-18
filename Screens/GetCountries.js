
import { View, Text } from 'react-native'
 import React, { useContext, useEffect ,useState} from 'react'
import { ContextApi } from '../App'

 export const GetCountries=(props)=> {
    let emailNew=props
    let context=useContext(ContextApi);
  //  let pID=context.id;

    const [testE,setTestE]=useState([])
    useEffect(()=>{
FetchApi()
    }

    )

    async function FetchApi(){
        const res= await fetch('http://192.168.70.158:3000/searchCountries',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'content-type':'application/json'
            },
            body:JSON.stringify({
              email:emailNew,
           
              
            }
              
            )
          })
      //   console.log("GetData from above is here ")
      const    y = await res.json();
    //   console.log(y)
    setTestE(y)
            
        }
return testE


   }

//    export {GetData,y}