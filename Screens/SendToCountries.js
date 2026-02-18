
import React, { useEffect } from 'react';
import { Text,View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function SendToCountries() {


///This file would send the whole data to the database and would ensure user that data has posted successfullly 
 const route = useRoute();
 const navigation = useNavigation(); 
    const { TestExp } =    route.params;
    console.log("Entered in SendToCountries file TestExp data  in test nav is  below down ... ")
    console.log(TestExp);
let pID= TestExp[0].pID;
let ToCountry= TestExp[0].ToCountry;
let FromCountry=TestExp[0].FromCountry;
let price= TestExp[0].price;
let post=TestExp[0].post;
let wgt=TestExp[0].wgt;
// console.log("")
console.log(pID);

   //take input through context 

    useEffect(()=>{
      try {

       // console.log("In SignUp Function is below")
       // console.log(name + ' ' + email + ' = ' +phone+' = '+ password)
        fetch('http://192.168.70.158:3000/NewPost',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'content-type':'application/json'
          },
        //  body:JSON.stringify(TestExp)
          body:JSON.stringify({
            pID:pID,
            ToCountry:ToCountry,
            FromCountry: FromCountry,
            price: price,
            post: post,
            wgt:wgt

          })
        }).then((response)=>{
          console.log("response from send signup api is below ")
          console.log(response.status)
          if(response.status==200){
            navigation.navigate('wall');
          }
        })
                  
            //  console.log('user successfully signed up!: ')
            } 
            
            
            
            catch (err) {
              console.log('error signing up: ')
            }
        








      



    }
    )

  return (
    <View style={{marginTop:50,marginLeft:50,fontWeight:'bold',fontSize:70}}>
      <Text>Sending To All </Text>
    </View>
  )
}