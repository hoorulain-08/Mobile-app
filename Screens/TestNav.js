
import React from 'react';
import { Text,View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function TestNav() {

    const route = useRoute();
    // const { TestExp } = route.params;
    // console.log("Data is below down ... ")
    // console.log(TestExp)
  return (
    <View>
      <Text>Hello World Its Here </Text>
    </View>
  )
}