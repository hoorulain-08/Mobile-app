import React from 'react'
import { UAE } from './Data';
export const Calculation = (prop) => {

    let i,comp,j=0;
    let values = [];
    //convert it into celing function and get the integer
 console.log("prop value is = " + prop)
//  case(UAE){}
for( i=0;i<UAE.length;i++){
   // console.log("UAE array data is here below = ")
    // console.log(UAE[i][j])
    const item = UAE[i];
    const [key, value] = Object.entries(item)[0];
    values.push(value);
    // const item = UAE[i];
    // const [key, value] = Object.entries(item)[0];
  //  console.log(`Key: ${key} - Value: ${value}`);
// let i='${value} '
//   console.log("key is below") 
  // console.log(key)
 //  console.log("value is =   below") 
 // console.log(value[0])
 
    if(key==prop)
    {
     //   console.log("value  below is the matched ");
        comp=i;
     //   console.log("the value of Comp in first for loop is =     "+comp)
      //  break;
       // console.log(values[])
         // return {value};
    }
    
}
for(let j=0;j<values.length;j++ ){
 // console.log("the value is in the second array is =  ");
 //  console.log("the value of J is =  " +j + "Comp value is =   "+comp)
  if(j==comp){

    comp=values[comp];
  //  console.log("executing second for loop if  comp is =  " + comp);
return comp
      
  }

//  console.log(values[j])

}

  
}
