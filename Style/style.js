
import { StyleSheet } from "react-native";


export const 
style = StyleSheet.create({
reg:
{
    borderWidth:1,
    borderColor:'black',
    padding:12,
    borderRadius:3
},

background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' depending on your preference
  },

    drawer: {
      width: '70%', // Replace with your desired width
      backgroundColor: 'red', // Replace with your desired background color
      shadowColor: 'pink', // Replace with your desired shadow color
      shadowOpacity: 0.8,
      elevation: 6,
    },
 Btn :  {
      padding: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#779eb2',
      width:100,
      height:50
    },
  txt : {
      fontSize: 15,
      padding: 8,
     
      fontWeight:'bold'

    }
,
    drawerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    profilePicture: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
vidBtn:{
 // position:'relative',
  marginTop:550,
  marginLeft:90,
  padding: 2,
  borderRadius: 8,
  borderWidth: 1,
  // borderColor: 'green',
  // backgroundColor: '#779eb2',
  backgroundColor:'#93CBDC',
  width:180,
  height:50
},
vidBtnBack:{
  // position:'relative',
   marginTop:50,
   marginLeft:90,
   padding: 2,
   borderRadius: 8,
   borderWidth: 1,
   // borderColor: 'green',
   // backgroundColor: '#779eb2',
   backgroundColor:'#93CBDC',
   width:180,
   height:50
 },
reqBtn:{
  marginTop:50,
  marginLeft:50,
  padding: 5,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: 'white',
  backgroundColor: '#779eb2',
  width:180,
  height:80
},

ArrowCont:{
 marginTop:5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Add this to add space between the text and image
  paddingHorizontal: 10, // Add some horizontal padding

}
,
ArrowText:{
fontWeight:'bold',
fontSize:20
},
GoArrow:{
  height:30,
  width:30
}
,

formContainer: {
  padding: 16,
},
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 8,
  paddingHorizontal: 10,
  width:'90%',
  height: 50,
  borderRadius: 10,
  borderWidth: 0.5,
  alignSelf: 'center',
},

TouchOP:{
  width: '90%',
  height: 50,
  borderRadius: 10,
  borderWidth: 0.5,
  alignSelf: 'center',
 // marginTop: 100,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 15,
  paddingRight: 15,
},

ViewSt:{
  elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
},
InpSt:{
  width: '90%',
  height: 50,
  alignSelf: 'center',
  borderWidth: 0.2,
  borderColor: '#8e8e8e',
  borderRadius: 7,
  marginTop: 20,
  paddingLeft: 20,
  color:'red'
}
,
FList:{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
},

SubSt:{
  backgroundColor: '#779eb2',
  padding: 20,
  borderRadius: 25,
  alignItems: 'center',
  width: '65%',
 // marginRight:20
},
SubStY:{
  backgroundColor: '#779eb2',
  padding: 20,
  borderRadius: 25,
  alignItems: 'center',
  width: '35%',
 // marginRight:20
}
,
SubStN:{
  backgroundColor: '#779eb2',
  padding: 20,
  borderRadius: 25,
  alignItems: 'center',
  width: '35%',
  marginLeft:10
 // marginRight:20
}
,


SubTxtY:{
  color: '#fff',
   textTransform: 'uppercase',
    fontWeight: '600' 
},

SubTxtN:{
  color: '#fff',
   textTransform: 'uppercase',
    fontWeight: '600' 
},



SubTxt:{
  color: '#fff',
   textTransform: 'uppercase',
    fontWeight: '600' 
},
inputNew: {
  height: 80,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 8,
  paddingHorizontal: 10,
  width:'90%',
  textAlignVertical:'top',
  //height: 50,
  borderRadius: 10,
  borderWidth: 0.5,
  alignSelf: 'center',
}
,
TxtSt:{
  fontWeight:'bold',
  color:'#808080',
  marginBottom:25,
  marginRight:8,
  marginLeft:16,
  textAlignVertical:'top'
},

TxtSty:{
  fontWeight:'bold',
  color:'#808080',
  marginTop:60,
  marginBottom:25,
  //marginRight:15,
  marginLeft:20
},
ConfTxt :{
  color:'black',
  fontWeight:'bold',
  fontSize:20,
  marginLeft:20
},
ConfTxtD :{
  color:'black',
  fontWeight:'bold',
  fontSize:20,
  marginTop:10,
  marginLeft:20
},
confRate:{
marginLeft:60,
    marginTop:60,
  
    color:'red',
    fontWeight:'bold',
    fontSize:30,
    backgroundColor:'#779eb2',

    borderWidth:1,
    borderColor:'black',
    padding:7,
    borderRadius:3,
    width:160,
    height:50,
  // paddingTop:10

}
,
confSTView:{
marginTop:40,
},
confBtn:{
  flexDirection: 'row',
  marginLeft:30,
  marginTop:20
}



})

// export {style}