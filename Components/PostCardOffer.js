import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,

} from '../Style/FeedStyles';
import {styled} from '../Style/FeedStyles'
import { style } from '../Style/style';
import ProgressiveImage from '../Components/ProgressiveImage';
import { ContextApi } from '../App';
// import {AuthContext} from '../navigation/AuthProvider';
import Modal from 'react-native-modal';
import moment from 'moment';

import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity,ScrollView,View,Button,TextInput,Text,StyleSheet,FlatList} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

const PostCard = ({item, onDelete, onPress}) => {

//  const {user, logout} = useContext(AuthContext);
console.log("item in PostCardOffer is below")
console.log(item)
  const [userData, setUserData] = useState(null);
  const [show,setShow]=useState(false)
  // const [isModalVisible, setModalVisible] = useState(false);
   const [price,setPrice]=useState();
  
   const [modalVisible, setModalVisible] = useState(false);
  let sendOffer=useContext(ContextApi);
  const nav=useNavigation();
  const toggleModal = () => {
    const MyId=sendOffer.id;
     console.log("price is below")
     console.log(price)
     console.log("item  is below")
     console.log(item.id)
    //  console.log("item image is below")
    //  console.log(item.image)
    if(MyId==item.id){
console.log("MyId is equall to item Id can")
alert("you can not give offer to yourself ")
setShow(true)
    }

    else{
      sendOffer.setOfferProfile((prev)=>({...prev,recvId:item.id}));
      sendOffer.setOfferProfile((prev)=>({...prev,price:price}));
      sendOffer.setOfferProfile((prev)=>({...prev,sendId:MyId}));
    }
  
   
    // console.log("out side function offerprofile is below ")
    // console.log(sendOffer.offerProfile);
    setModalVisible(!modalVisible);
  };
  console.log("Outside function offerprofile is below ")
  console.log(sendOffer.offerProfile);
//   console.log("userName is here download below = ")
// console.log(item.post);
// setUserData(item.userName)
  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }
  function accept(){
    /*
    this function would give return in response 
     give value that offered ut the user to the owner 
    
    
    */
     
console.log("In Accept function for Navigation ");
console.log(item.id)
//
nav.navigate('video',{id:item.id});
//nav.navigate('video',{sendId:item.sendId});



  }

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(item.userId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }ec
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
<ScrollView>
    <Card key={item.id}>
       
      <UserInfo>
      <UserImg
         source={{uri :item.image}}
        />
        <UserInfoText>
          <TouchableOpacity onPress={onPress}>
            <UserName>
            
            {item.name}
          
            </UserName>
          </TouchableOpacity>
          {/* <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>  */}
          
          
          

        </UserInfoText>
      </UserInfo>
      <PostText>I will pay you  this amount   {'\n'} {'\n'}</PostText>
       
      <PostText>Amount : {item.NewOffer} {'\n'} {'\n'}</PostText>
     
       <InteractionWrapper>
            <Interaction >
         <TouchableOpacity  style={style.Btn} onPress={accept}>
           <Text  style={style.txt}>
           Accept 
          </Text>
         </TouchableOpacity>
        
    
        </Interaction>
        <Interaction onPress={() => onDelete(item.id)}>
          <TouchableOpacity  style={style.Btn}>
          <Text  style={style.txt}>
         Decline 
          </Text>
         </TouchableOpacity>
          </Interaction>
    {/* {item.userId == item.userId ? (
             //FOR SOMETHING ASSUMING THESE THINGS LIKE THIS FOR MORE 
          <Interaction onPress={() => onDelete(item.id)}>
          <TouchableOpacity  style={styled.btn}>
          <Text  style={styled.txt}>
         Discard 
          </Text>
         </TouchableOpacity>
          </Interaction>
        ) 
        : null}  */}
      </InteractionWrapper>   
      
    


    </Card>
    </ScrollView> 
    
    
    </>
  );
};

export default PostCard;
