   {/* <TouchableOpacity  style={style.vidBtn}>
<View style={[style.ArrowCont, { flexDirection: 'row', alignItems: 'center' }]} >
  <Text style={style.ArrowText} >
    GO AHEAD 
  </Text>

  <Image  source={require('../assets/arrow.png')} style={style.GoArrow}/>
</View>
</TouchableOpacity>

<TouchableOpacity  style={style.vidBtn}>
<View style={[style.ArrowCont, { flexDirection: 'row', alignItems: 'center' } ]  } >
<Image  source={require('../assets/arrow.png')} style={[style.GoArrow ,{ transform: [{ rotate: '180deg' }] }]}/>

  <Text style={style.ArrowText} >
    GO BACK
  </Text>

</View>
</TouchableOpacity> */}


//ShowVideo.js is working Fine 

// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Linking,Text, Button,ImageBackground } from 'react-native';
// import axios from 'axios';
// import { Video } from 'expo-av';
// import * as FileSystem from 'expo-file-system';
// import { shareAsync } from 'expo-sharing';
// // import video-thumbnail from '../assets/video-thumbnail.png';
// // import { style } from '../Style/style';
// const VideoPlayer = ({ videoId }) => {
//   const [videoUrl, setVideoUrl] = useState(null);
// const [show,setShow]=useState();
// const[flag,setFlag]=useState(1);
// const [isVideoVisible, setIsVideoVisible] = useState(false);


//   useEffect(() => {
//     const fetchVideo = async () => {
       
   

//       const localhost = Platform.OS === "android" ? "192.168.1.32" : "192.168.1.32";
//       // let id=resp.id;  
//       // console.log(id)
//       const id=1
//       const filename=generateRandomString()+'.mp4'
//       console.log("fileName is below")
//       console.log(filename)
//       const VideoTest='Vide13483.mp4';
//       const t=flag;
//        let x=t+1;
//        console.log("flag is below = ")
//        console.log(flag);
//       //  setFlag(x)
//       const result = await FileSystem.downloadAsync(
//         `http://${localhost}:3000/video/${id}`,
//         FileSystem.documentDirectory + filename,
//         {
//          headers: {
//          "content-Type": "video/mp4"
//          }
//         }
//      );
//      console.log("result is below  = ")
//      console.log(result.uri)
//  setShow(result.uri)




// //setVideoUrl(result.uri)

  
//    //   save(result.uri, filename, result.headers["Content-Type"]);



//     };
//     fetchVideo();

//   },);
// // useEffect(() => {
// //   (async () => {
// //     await Video.setIsLoopingAsync(true);
// //   })();
// // }, []);
//   const handlePlay = () => {
// console.log("Video Url is below ")
// const test=show;
// console.log(`${test}`)
// setVideoUrl(`${test}`);
// setShow("")
// // setFlag(true);
// const t=flag;
//        let x=t+1;
//       setFlag(x)
//   //  Linking.openURL(`${test}`);

//   //   setVideoUrl(show)
//   };
//   const generateRandomString = () => {
//     console.log("In Generate function is below down ")
//      length=5;
//    //  setLeng(length);
//      let result = '';
//      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//      const charactersLength = characters.length;
//      console.log(charactersLength)
//      let counter=0;
//      while(counter<=length){
//        result+=characters.charAt(Math.floor(Math.random()*charactersLength));
       
 
//        counter+=1
       
//      }
//     return result
//    };
//   const save = async (uri, filename, mimetype) => {
//     if (Platform.OS === "android") {
//       const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//       if (permissions.granted) {
//         const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
//         await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
//           .then(async (uri) => {
//             await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
//           })
//           .catch(e => console.log(e));
//       } else {
//         shareAsync(uri);
//       }
//     } else {
//       shareAsync(uri);
//     }
//   };

//   return (
// <View style={styles.container}>     
// {videoUrl && (
//         <Video
//           source={{ uri: videoUrl }}
//           style={[styles.video, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0} ]}
//           resizeMode="contain"
//           shouldPlay
//           isLooping
//         />
//       )
//       }
//       <View style={{marginTop:120}}>
        
//       <Button title='Play BUTTON' onPress={handlePlay}/>
//       </View>
// {/* <View style={{marginTop:80}}>
//   <TouchableOpacity onPress={handlePlay}>
    
//     <Image source={require('../assets/videoThumbnail.png')} style={styles.thumbnail} />
    

// </TouchableOpacity>
// </View> */}

//     </View>


//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     width: '100%',
//     height: 200,
//   },
//   thumbnail: {
//   width: '70%',
//   height: 200,
//   marginLeft:50,
//   marginTop:80
//   },
//   playButton: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -25 }, { translateY: -25 }],
//     width: 50,
//     height: 50,
//     backgroundColor: 'red',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',


//   },
//   playIcon: {
//     width: 20,
//     height: 20,
//   },
//     video: {
//       width: 300,
//       height: 500,
//       marginLeft:50,
//       marginTop:100
//   //  resizeMode:'cover'
//   },


// });

export default VideoPlayer;