import { View, Text } from 'react-native'
import React, { Children } from 'react'
const MyContext = React.createContext();

const PracticeProvider=({childern})=>{
    const[val,setVal]=React.useState(1);



    return(
        <MyContext.Provider
        value={{
            val,setVal
        }}>
          {childern}
        </MyContext.Provider>
    )
}








export {MyContext,PracticeProvider} ;
// ```
// export default function Context() {
//   return (
//     <View>
//       <Text>Context</Text>
//     </View>
//   )
// }