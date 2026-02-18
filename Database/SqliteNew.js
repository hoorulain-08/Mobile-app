// import * as SQLite from 'expo-sqlite';

// const databaseName = 'Try.db';
// const databaseVersion = '1.0';

// const fb = SQLite.openDatabase(databaseName, databaseVersion);

// console.log("In SQLITENew file fb file below = ")

// fb.transaction((tx) => {
//   tx.executeSql(  
//     'CREATE TABLE IF NOT EXISTS InMessageN (id INTEGER PRIMARY KEY AUTOINCREMENT, sendNew INTEGER, recvNew INTEGER, msg TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)',
//     [],
//     (_, result) => {
//       console.log('Table created successfully');
//     },
//     (_, error) => {
//       console.log('Error creating table:', error);
//     }
//   );
// });

// export default fb;


// import * as SQLite from 'expo-sqlite';

// const databaseName = 'Try.db';
// const databaseVersion = '1.0';

// const fb = SQLite.openDatabase(databaseName, databaseVersion);

// console.log("In SQLITENew file fb file below = ")

// fb.transaction((tx) => {
//   tx.executeSql(  
//     'CREATE TABLE IF NOT EXISTS InMessageN (id INTEGER PRIMARY KEY AUTOINCREMENT, send TEXT, recv TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)',
//     [],
//     (_, result) => {
//       console.log('Table created successfully');
      
//   //     const timestamp = new Date().toISOString(); // Get current timestamp in ISO 8601 format
//   //     console.log("New Date is below down = ")
//   //     let da=new Date
//   //     console.log(da)
//   //     if(da==timestamp){
//   //       console.log("da and  time stamp are equal so don't worry ")
//   //     }
//   //     else if(da>timestamp)
//   //     {
//   //       console.log("SORRY DA is greater than TIMESTAMP are not equall")
//   //     }
//   //     else if(da<timestamp)
//   //     {
//   //       console.log("da isless than timestamp")
//   //     }
//   //     else{
//   //       console.log("nothing")
//   //     }
//   //     tx.executeSql(
//   //       'INSERT INTO InMessageN (sendNew, recvNew, msg, timestamp) VALUES (?, ?, ?, ?)',
//   //       [3, 1, 'hello world', timestamp],
//   //       (_, insertResult) => {
//   //         console.log('Data inserted successfully');
//   //       },
//   //       (_, insertError) => {
//   //         console.log('Error inserting data:', insertError);
//   //       }
//   //     );
//   //   },
//   //   (_, error) => {
//   //     console.log('Error creating table:', error);
//      },
//      (_, error) => {
//       console.log('Error creating table:', error);
//     }
//    );
// });

// //timestamp DATETIME
// export default fb;




import * as SQLite from 'expo-sqlite';

const databaseName = 'Try.db';
const databaseVersion = '1.0';

const fb = SQLite.openDatabase(databaseName, databaseVersion);

console.log("In SQLITENew file fb file below = ")

fb.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, sender INTEGER, receiver INTEGER, message TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)',
    [],
    (_, result) => {
      console.log('Table created successfully');
    },
    (_, error) => {
      console.log('Error creating table:', error);
    }
  );
});

export const saveMessage = (sender, receiver, message) => {
  console.log("saveMsg sender")
  console.log(sender)
  console.log("recevier")
  console.log(receiver);
  console.log("message")
  console.log(message);
  return new Promise((resolve, reject) => {
    fb.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO messages (sender, receiver, message) VALUES (?,?,?)',
        [sender, receiver, message],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getMessages = () => {
  return new Promise((resolve, reject) => {
    fb.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM messages ORDER BY timestamp DESC',
        [],
        (_, result) => {
          const messages = [];
          for (let i = 0; i < result.rows.length; i++) {
            messages.push(result.rows.item(i));
          }
          resolve(messages);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};