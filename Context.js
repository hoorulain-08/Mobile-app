
// import {React} from "react";
import * as React from 'react';
import { createContext ,useState} from "react";
const Practice = createContext();


const Provide=({childern})=>{
    const[val,setVal]=useState(2);    

return(
<Practice.Provider value={{val,setVal}}>
       {childern} 
    </Practice.Provider>

)

}
export {Practice,Provide};



