import { View, Text ,Button} from 'react-native'
import React, { useEffect } from 'react'
import fb from '../Database/SqliteNew'
export default function SqliteDbTest() {

    const sendId=2;
    const recvId=4;
    const message='hello Fb database is down';
    const timestamp = new Date();
    useEffect(()=>{
        console.log("sqliteDbTest UE1")
        fb.transaction(tx => {
            tx.executeSql(
              `INSERT INTO InMessageN (sendNew,recvNew,msg,timestamp) values (?,?,?,?)`,
              [sendId,recvId,message,timestamp],
              (tx, result) => {
                console.log('Message saved to the fb database');
              //  temp(1);
              },
              (error) => {
                console.log('Error in fb  saving message:', error);
              }
            );
          });
    //       fb.transaction(tx => {
    //         tx.executeSql('SELECT * FROM InMessageN ', null,
    //            (txObj, resultSet) =>{ setName(resultSet.rows._array)
              
    //           console.log("chatScreen messages get  from  sqlIte InMessage are down below"),
    //           console.log(resultSet.rows._array)
            
    //         },
    //               // console.log('1.'),
    //               // setTest(resultSet.rows._array)
                 
    //           // setNames(test),
    //            (txObj, error) => console.log(error)
    //         );
    //   // console.log(names);
    //       })
        
    })



    function disp(){
        console.log("disp function is down below ")
                fb.transaction(tx => {
            tx.executeSql('SELECT * FROM InMessageN ', null,
               (txObj, resultSet) =>{ 
              
              console.log("chatScreen messages get  from  sqlIte InMessage are down below"),
              console.log(resultSet.rows._array)
            
            },
                  // console.log('1.'),
                  // setTest(resultSet.rows._array)
                 
              // setNames(test),
               (txObj, error) => console.log(error)
            );
      // console.log(names);
          })
    }
  return (
    <View>
      <Text>SqliteDbTest</Text>
      <Button title='SHOW DATA' onPress={disp}/>
    </View>
  )
}