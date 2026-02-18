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
import {TouchableOpacity,ScrollView,View,Button,TextInput,Text,StyleSheet} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

const PostCard = ({item, onDelete, onPress}) => {
//  const {user, logout} = useContext(AuthContext);
// console.log("item in PostCard is below")
// console.log(item)
  const [userData, setUserData] = useState(null);
  const [show,setShow]=useState(false)
  // const [isModalVisible, setModalVisible] = useState(false);
   const [price,setPrice]=useState();
  
   const [modalVisible, setModalVisible] = useState(false);
  let sendOffer=useContext(ContextApi)
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
  function offer(){
    /*
    this function would give return in response 
     give value that offered ut the user to the owner 
    
    
    */
     






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
    <Card key={item.pID}>
       
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
      <PostText>{item.post} {'\n'} {'\n'}</PostText>
       
      <PostText>ToCountry : {'\n'} {'\n'}</PostText>
      <PostText>{item.ToCountry}{'\n'} {'\n'}</PostText>
      <PostText>FromCountry : {'\n'} {'\n'}</PostText>
      <PostText>{item.FromCountry}{'\n'} {'\n'}</PostText>
      <PostText>Weight : {'\n'} {'\n'}</PostText>
      <PostText>{item.wgt}{'\n'} {'\n'}</PostText>
      <PostText>Price : {'\n'} {'\n'}</PostText>
      <PostText>{item.price}{'\n'} {'\n'}</PostText>
      {
        show ? null:
       <InteractionWrapper>
            <Interaction onPress={offer}>
         <TouchableOpacity  style={style.Btn} onPress={() => setModalVisible(true)}>
           <Text  style={style.txt}>
            Give Offer  
          </Text>
         </TouchableOpacity>
        
      <Modal
        visible={modalVisible}
      
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter your offer </Text>
            <TextInput value={price} onChangeText={(e)=>setPrice(e)} style={styles.input} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleModal}
            >
              <Text style={styles.closeButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </Interaction>
        <Interaction onPress={() => onDelete(item.id)}>
          <TouchableOpacity  style={style.Btn}>
          <Text  style={style.txt}>
         Discard 
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
      }
    


    </Card>
    </ScrollView> 
    
    
    </>
  );
};

export default PostCard;
const styles = StyleSheet.create({

  input: {
    width: 350,
    height: 55,
     backgroundColor: '#b0c4de',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderColor:'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#6facbf',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

