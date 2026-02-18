
//TestUpload.js is down below


import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import * as Random from 'expo-random';


import { Video } from 'expo-av';
// import RNBlobUtil from 'react-native-blob-util';
const TestUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadedVideoUri, setUploadedVideoUri] = useState(null);
  const handlePickVideo = async () => {
    // Request camera roll permissions
    console.log("in handle pic video")
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access media library was denied');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });



// console.log("result is below down = ")
// console.log(result)



    if (!result.canceled) {
        console.log("the URI has been set the result is below down =  ")
        console.log(result.assets[0].uri)
     setUploadedVideoUri(result.assets[0].uri);
      setVideoFile(result);
    }
  };

const handleUploadVideo = async () => {
  console.log("video is down below = ")
  console.log(videoFile);
 const sendId=3,recvId=6;
//  

const min=0;
const max=3;

  try {
    // Generate a unique filename for the video
    const randomBytes = await Random.getRandomBytesAsync(4);
    console.log("RandomBytes  nuber is below  is below down = ")
console.log(randomBytes)
    const videoPath = `${FileSystem.documentDirectory}${fileName}`;
    const ran=Math.floor(Math.random()*(max-min+1)) + min;
    console.log("ran is below = ")
    console.log(ran);
    const RanIt=new Uint32Array(randomBytes)[ran]
console.log("Random nuber is below  is below down = ")
console.log(RanIt)
    const fileName = `video_${RanIt}.mp4`;
    // Copy the video file to the app's document directory
    await FileSystem.copyAsync({
      from: videoFile.assets[0].uri,
      to: videoPath
    });

    // Send the video to the backend
    const formData = new FormData();
    formData.append('video', {
      uri: videoPath,
      name: fileName,
      type: 'video/mp4'
    });
    formData.append('sendId', sendId);
    formData.append('recvId', recvId);

    // Send the video to the backend
    const response = await fetch('http://192.168.1.32:3000/uploadVideo', {
      method: 'POST',
      body: formData
    });
    console.log("response from frontEnd is below = ")
    console.log(response)
    if (response.ok) {
      const { videoId } = await response.json();
      console.log('Video uploaded successfully. Video ID:', videoId);
    } else {
      console.error('Failed to upload video:', await response.json());
    }
  } catch (error) {
    console.error('Error uploading video:', error);
  }




};

const handleSubmit = async () => {
  
  if (!videoFile || !sendId || !recvId) {
    alert('Please select a video and enter the send and receive IDs.');
    return;
  }

  const formData = new FormData();
  formData.append('video', {
    uri: videoFile,
    type: 'video/mp4',
    name: 'video.mp4',
  });
  formData.append('sendId', sendId);
  formData.append('recvId', recvId);

  try {
    const response = await fetch('http://your-api-endpoint.com/upload-video', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Video uploaded successfully!');
    } else {
      alert('Failed to upload video.');
    }
  } catch (error) {
    console.error('Error uploading video:', error);
    alert('An error occurred while uploading the video.');
  }
};



  return (
    <View style={styles.container}>

{uploadedVideoUri && (
        <Video
          source={{ uri: uploadedVideoUri }}
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
      )}
      <Button title="Pick Video" onPress={handlePickVideo} />
      <Button title="Upload Video" onPress={handleUploadVideo} />


    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default TestUpload;