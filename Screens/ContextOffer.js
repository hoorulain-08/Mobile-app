import React, { useContext, useState } from 'react';
import { View, Text, Button,TextInput } from 'react-native';
import Modal from 'react-native-modal';
 import { Practice } from '../Context';
export default function ContextOffer() {
  console.log("In ContextOffer file start ")
  const temp=useContext(Practice)
  const [isModalVisible, setModalVisible] = useState(false);                                                                                                                          

  let test=temp.val;
  console.log("value of test from context API  is below = ")
  console.log(test);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: 'white', padding: 16 }}>
          <Text>This is a modal!</Text>
          <TextInput
            style={{ height: 50, width: 250, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }}
            placeholder="Enter text"
          />
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}