// ChildComponent.js
import React, { useContext } from 'react';
import MyContext from './Context/Context';
import { Text } from 'react-native';
function ChildComponent () {
//   const sharedData = useContext(MyContext);
const {val,setVal}=useContext(MyContext)

  return (
  <View>
    <Text>
        VALUE AFTER CONTEXT API
    </Text>
 {/* <Text>{val}</Text> */}

  </View>
  
 );
};

export default ChildComponent;
