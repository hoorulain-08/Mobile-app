const express = require('express');
const app = express();
const server = require('http').Server(app);
const mysql = require('mysql');
const multer = require('multer');
const cors = require('cors'); 
const fs = require('fs');
const io = require('socket.io')(server);
const path = require('path');
// app.use(express.json());
app.use(express.json({ limit: '50mb' })); // Increase the limit to 50MB (or a suitable value)


app.use(cors());
const bcrypt = require("bcrypt");
const { Console, error } = require('console');  
// let temp=[];
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'node_db',
});

db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  // 0504022988
 // console.log('Client connected');
 // console.log(socket.id)
  socket.on('chatMessage', (message) => {
    console.log("message is below ")
    console.log(message);
   console.log('Received message:', message);
    // Handle the message
socket.on('privateMessage',(data)=>{
  const { rece, message,sender} = data;
io.to(rece).emit('newPrivateMessage', message)
})
    // Broadcast the message to other clients
    io.emit('chatMessage', message);
});


// Socket.on('connect', () => {
//   console.log('Connected to Socket.IO server');
//   console.log(Socket.id)
// });
socket.on('disconnect', () => {
  console.log('Client disconnected');
})
});
// Set up Multer storage
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => cb(null, file.originalname),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
    fields: 10, // maximum number of non-file fields
    fieldSize: 1 * 1024 * 1024, // 1 MB
    files: 1, // maximum number of files per request
  },
});

// Create a Multer instance
const upload = multer({ storage });

// Define the route to handle the file upload
app.post('/upload', upload.single('image'), (req, res) => {
  console.log("upload the request sent from frontEnd is below")
  // console.log()
  // Get the ID value from the request body
  const id = req.body.id;
console.log("request file is below ")
console.log(req.body)
console.log(id)
  // Get the file path of the uploaded image
  const imagePath = req.file.path;
console.log("image path is below ")
console.log(imagePath)
  // Read the image file
  const image = fs.readFileSync(imagePath);

  // Convert the image to a Buffer
  const imageBuffer = Buffer.from(image);
  

  console.log("image path is below ")
console.log(imageBuffer)
  // Prepare the SQL query
 // const query = 'INSERT INTO imgTest (id, image) VALUES (?, ?)';
   const values = [imageBuffer,id];
// const query='UPDATE reg SET image ='${imageValue}' WHERE id=1';
// const query = `UPDATE reg SET image = '${imageBuffer}' WHERE id = 1`;
const query = 'UPDATE reg SET image = ? WHERE id = ?';

  // Execute the SQL query
  db.query(query, values,(error, results) => {
    if (error) {
      console.error('Error saving the image to the database:', error);
      res.status(500).send('Error saving the image');
      return;
    }

    console.log('Image saved to the database');

    // Delete the uploaded file
    fs.unlinkSync(imagePath);

    res.send('Image saved');
  });
});

app.post('/test', (req, res) => {
  console.log('entering test request is below ');

  console.log(req.body.id);
  id = req.body.id;
  price=req.body.price;
  console.log(req.body.price);
  // query=`UPDATE posts SET price='${price}' WHERE id='${id}'`;
  // db.query(query,[price,id],(error,results)=>{
  //   if(error){
  //     console.error("unable tp update the price ",error);
  //     res.status(500).send('Error saving the image');
  //     return
  //   }
    
  //   res.send("price Updated");




  // })
  // console.log('this is below is done below ');
  // console.log(id);
   res.json({ message: 'Image inserted successfully' });
});


// Configure Multer storage settings for video uploads

// const storageNew = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null,'./uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const storageNew = multer.diskStorage({
//   destination: './uploads/videos',
//   filename: (req, file, cb) => cb(null, file.originalname),
// });

// //Create a Multer instance for video uploads
// const uploadNew = multer({ storageNew });

// //Define the route to handle the video upload
// app.post('/upload-video', uploadNew.single('video'), (req, res) => {
//   console.log('Video upload request received');

//   // Get the ID values from the request body
//   const sendId = req.body.sendId;
//   const recvId = req.body.recvId;

//   console.log(sendId);
//   console.log(recvId);

//   // Check if the file was uploaded successfully
//   if (!req.file) {
//     console.error('No file uploaded');
//     res.status(400).send('No file uploaded');
//     return;
//   }

//   // Get the file path of the uploaded video
//   const videoPath = req.file.path;
//   console.log('videoPath:', videoPath);
//   // Read the video file
//   // fs.readFile(videoPath, (error, video) => {
//   //   if (error) {
//   //     console.error('Error reading the video file:', error);
//   //     res.status(500).send('Error reading the video file');
//   //     return;
//   //   }

//   //   // // Convert the video to a Buffer
//   //   // const videoBuffer = Buffer.from(video);

//   //   // // Prepare the SQL query
//   //   // const values = [videoBuffer, sendId, recvId];
//   //   // const query = 'UPDATE video SET video = ? WHERE sendId = ? AND recvId = ?';

//   //   // // Execute the SQL query
//   //   // db.query(query, values, (error, results) => {
//   //   //   if (error) {
//   //   //     console.error('Error saving the video to the database:', error);
//   //   //     res.status(500).send('Error saving the video');
//   //   //     return;
//   //   //   }

//   //   //   console.log('Video saved to the database');

//   //   //   // Delete the uploaded file
//   //   //   fs.unlink(videoPath, (error) => {
//   //   //     if (error) {
//   //   //       console.error('Error deleting the uploaded file:', error);
//   //   //     }
//   //   //   });

//   //   //   res.send('Video saved');
//   //  // });
//   // });




// });



const storageNew = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Endpoint to receive the video from the frontend
app.post('/upload-video', upload.single('video'), (req, res) => {
console.log("upload-video API is down request is down below ")
console.log(req)

const obj = JSON.parse(JSON.stringify(req.body)); 
//console.log(obj)
 console.log(req.file.filename)
// console.log()

console.log("path is down")
console.log(req.file.path)
  // if (!req.file) {
  //   return res.status(400).json({ error: 'No video file provided' });
  // }
 // const { sendId, recvId } = req.body;
  const sendId=obj.sendId;
  const recvId=obj.recvId;
  console.log(sendId)
  console.log("filename is below ")
console.log(req.file.filename)
console.log("sendID and recvId is below ")

console.log("recvId is below  ")
console.log(recvId)
  // Insert the video information into the SQL database
  const query = 'INSERT INTO video (sendId,recvId,filename,path) VALUES (?,?,?,?)';
  db.query(query, [sendId, recvId,req.file.filename,req.file.path], (err, result) => {
    if (err) {
      console.error('Error saving video:', err);
      return res.status(500).json({ error: 'Failed to save video' });
    }

    res.status(200).json({ message:'Video uploaded and saved successfully'});
  });


});


//*************************************************************************************** */
//*************************************************************************************** */
//this below API is just used for the testing  the above API  upload-video is working fine 
app.post('/uploadVideo', upload.single('video'), (req, res) => {
console.log("In UploadVideo function below = ")
console.log(req)
console.log("In UploadVideo function below = ")
console.log(req)
if (!req.file) {
  return res.status(400).json({ error: 'No file uploaded' });
}
const uploadDir = 'uploads/'
//const videoPath = path.join(uploadDir, req.file.filename);
const obj=JSON.parse(JSON.stringify(req.body));
const videoPath=req.file.path;
const sendId=obj.sendId;
const recvId=obj.recvId;
console.log("path video obj is down below = ")
console.log(videoPath);
// Insert the video path into the database
const query = 'INSERT INTO video (sendId,recvId,filename,path) VALUES (?,?,?,?)';
db.query(query, [sendId, recvId,req.file.filename,req.file.path], (err, result) => {
  if (err) {
    console.error('Error saving video:', err);
    return res.status(500).json({ error: 'Failed to save video' });
  }

  res.status(200).json({ message:'Video uploaded and saved successfully'});
});
  
  });
  
app.get('/get-video/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  const query = 'SELECT * FROM video WHERE id = ?';
  db.query(query, [videoId], (err, result) => {
    if (err) {
      console.error('Error retrieving video:', err);
      return res.status(500).json({ error: 'Failed to retrieve video' });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: 'Video not found' });
    }

    const videoData = result[0];

    // Set the appropriate headers for the video file
    res.setHeader('Content-Type', 'video/mp4'); // Adjust the content type based on the file format
    res.setHeader('Content-Disposition', `attachment; filename="${videoData.filename}"`);

    // Read the video file from the file system and send it as the response
    fs.createReadStream(videoData.videoPath).pipe(res);
  });
});
app.get('/image/:id', (req, res) => {
  // Get the ID from the request parameters
  
  const id = req.params.id;
  console.log("the image Id is below =  ")
  console.log(id)
    // Prepare the SQL query
    const query = 'SELECT name,image FROM reg WHERE id = ?';
    const values = [id];
  
    // Execute the SQL query
    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error retrieving the image from the database:', error);
        res.status(500).send('Error retrieving the image');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Image not found');
        return;
      }
  
  
      console.log("result of image is below")
      console.log(results)
      // Get the image data from the query results
      const imageBuffer = results[0].image;
  console.log("image is below ")
  console.log(imageBuffer)
      // Set the appropriate headers for the image response
      // res.setHeader('Content-Type', 'image/jpeg');
  
      // Send the image buffer as the response
      const sendId = 8
      const recvId = 9;
      console.log(sendId);
      console.log(recvId);
    
      const query = 'SELECT path, filename FROM video WHERE sendId = ? AND recvId = ?';
      db.query(query, [sendId, recvId], (err, result) => {
        if (err) {
          console.log('Error in fetching video');
          res.status(500).json({ error: 'Error in fetching video' });
          return;
        }
    
        console.log("the result is below = ")
        console.log(result);
        if (result.length > 0) {
          const videoPath = result[0].path;
    
    console.log("video data is below down = ")
    console.log(videoPath)
    fs.readFile(videoPath, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading video file' });
      }
      // Set the appropriate content type for the video file
      const mimeType = 'video/mp4'; // Adjust this based on the video file type
       res.setHeader('Content-Type', mimeType);
       res.setHeader('Content-Disposition', `attachment; filename="${path.basename(videoPath)}"`);
      // console.log("data is below  =  ");
      // console.log(data)
     // res.setHeader('Content-Type', 'video/mp4');
    //  res.setHeader('Content-Type', 'image/jpeg');






      res.send(data);
    });
        } else {
          res.status(404).json({ error: 'Video not found' });
        }
    
    
    
    
    
    
      });










      
   //   res.send(imageBuffer);







    });
  });
  
  app.get('/imageTest/:id', (req, res) => {
    // Get the ID from the request parameters
    const id = req.params.id;
  console.log("the image Id in reg is below =  ")
  console.log(id)
    // Prepare the SQL query
    const query = 'SELECT name,image FROM reg WHERE id = ?';
    const values = [id];
  
    // Execute the SQL query
    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error retrieving the image from the database:', error);
        res.status(500).send('Error retrieving the image');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Image not found');
        return;
      }
  
  
      console.log("result of name of image from reg is below")
      console.log(results[0].name)
      // Get the image data from the query results
      const imageBuffer = results[0].image;
  console.log("imageBuffer from reg  is below ")
  console.log(imageBuffer)
      // Set the appropriate headers for the image response
      res.setHeader('Content-Type', 'image/jpeg');
      const name=results[0].name;
    
  const resp={
  imageBuffer,
  name
  }
  
      // Send the image buffer as the response
      res.send(imageBuffer);
    
});




  
});



app.get('/image/:id', (req, res) => {
  // Get the ID from the request parameters
  
  const id = req.params.id;
  console.log("the image Id is below =  ")
  console.log(id)
    // Prepare the SQL query
    const query = 'SELECT name,image FROM reg WHERE id = ?';
    const values = [id];
  
    // Execute the SQL query
    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error retrieving the image from the database:', error);
        res.status(500).send('Error retrieving the image');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Image not found');
        return;
      }
  
  
      console.log("result of image is below")
      console.log(results)
      // Get the image data from the query results
      const imageBuffer = results[0].image;
  console.log("image is below ")
  console.log(imageBuffer)
      // Set the appropriate headers for the image response
      // res.setHeader('Content-Type', 'image/jpeg');
  
      // Send the image buffer as the response
      const sendId = 8
      const recvId = 9;
      console.log(sendId);
      console.log(recvId);
    
      const query = 'SELECT path, filename FROM video WHERE sendId = ? AND recvId = ?';
      db.query(query, [sendId, recvId], (err, result) => {
        if (err) {
          console.log('Error in fetching video');
          res.status(500).json({ error: 'Error in fetching video' });
          return;
        }
    
        console.log("the result is below = ")
        console.log(result);
        if (result.length > 0) {
          const videoPath = result[0].path;
    
    console.log("video data is below down = ")
    console.log(videoPath)
    fs.readFile(videoPath, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading video file' });
      }
      // Set the appropriate content type for the video file
      const mimeType = 'video/mp4'; // Adjust this based on the video file type
       res.setHeader('Content-Type', mimeType);
       res.setHeader('Content-Disposition', `attachment; filename="${path.basename(videoPath)}"`);
      // console.log("data is below  =  ");
      // console.log(data)
     // res.setHeader('Content-Type', 'video/mp4');
    //  res.setHeader('Content-Type', 'image/jpeg');






      res.send(data);
    });
        } else {
          res.status(404).json({ error: 'Video not found' });
        }
    
    
    
    
    
    
      });










      
   //   res.send(imageBuffer);







    });
  });


  app.get('/Video/:id', (req, res) => {
    // Get the ID from the request parameters
    
    const id = req.params.id;
    console.log("the image Id is below =  ")
    console.log(id)
      // Prepare the SQL query
      const query = 'SELECT name,image FROM reg WHERE id = ?';
      const values = [id];
    let i=0;
    i=i+1;
    console.log("i value is below  =   ")
    console.log(i)
      // Execute the SQL query
      db.query(query, values, (error, results) => {
        if (error) {
          console.error('Error retrieving the image from the database:', error);
          res.status(500).send('Error retrieving the image');
          return;
        }
    
        if (results.length === 0) {
          res.status(404).send('Image not found');
          return;
        }
    
    
        console.log("result of image is below")
        console.log(results)
        // Get the image data from the query results
        const imageBuffer = results[0].image;
    console.log("image is below ")
    console.log(imageBuffer)
        // Set the appropriate headers for the image response
        // res.setHeader('Content-Type', 'image/jpeg');
    
        // Send the image buffer as the response
        const sendId = 3
        const recvId = 6;
        console.log(sendId);
        console.log(recvId);
      
        const query = 'SELECT path, filename FROM reg WHERE id=?';
        db.query(query, [id], (err, result) => {
          if (err) {
            console.log('Error in fetching video');
            res.status(500).json({ error: 'Error in fetching video' });
            return;
          }
      
          console.log("the result is below = ")
          console.log(result);
          if (result.length > 0) {
            const videoPath = result[0].path;
      
      console.log("video data is below down = ")
      console.log(videoPath)
      fs.readFile(videoPath, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error reading video file' });
        }
        // Set the appropriate content type for the video file
        const mimeType = 'video/mp4'; // Adjust this based on the video file type
         res.setHeader('Content-Type', mimeType);
         res.setHeader('Content-Disposition', `attachment; filename="${path.basename(videoPath)}"`);
        // console.log("data is below  =  ");
        // console.log(data)
       // res.setHeader('Content-Type', 'video/mp4');
      //  res.setHeader('Content-Type', 'image/jpeg');
  
  
  
  
  
  
        res.send(data);
      });
          } else {
            res.status(404).json({ error: 'Video not found' });
          }
        });
  
  
  
  
  
  
  
  
  
  
        
     //   res.send(imageBuffer);
  
  
  
  
  
  
  
      });
    });

app.get('/imageTest/:id', (req, res) => {
  // Get the ID from the request parameters
  const id = req.params.id;
console.log("the image Id in reg is below =  ")
console.log(id)
  // Prepare the SQL query
  const query = 'SELECT name,image FROM reg WHERE id = ?';
  const values = [id];

  // Execute the SQL query
  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error retrieving the image from the database:', error);
      res.status(500).send('Error retrieving the image');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('Image not found');
      return;
    }


    console.log("result of name of image from reg is below")
    console.log(results[0].name)
    // Get the image data from the query results
    const imageBuffer = results[0].image;
console.log("imageBuffer from reg  is below ")
console.log(imageBuffer)
    // Set the appropriate headers for the image response
    res.setHeader('Content-Type', 'image/jpeg');
    const name=results[0].name;
  
const resp={
imageBuffer,
name
}

    // Send the image buffer as the response
    res.send(imageBuffer);
  });






});
app.post('/GetVideo', (req, res) => {
  console.log("GetVideo iss down below request is below ");
  
  const sendId = 6
  const recvId = 15;
  console.log(sendId);
  console.log(recvId);

  const query = 'SELECT path, filename FROM video WHERE sendId = ? AND recvId = ?';
  db.query(query, [sendId, recvId], (err, result) => {
    if (err) {
      console.log('Error in fetching video');
      res.status(500).json({ error: 'Error in fetching video' });
      return;
    }

    console.log("the result is below = ")
    console.log(result);
    if (result.length > 0) {
      const videoPath = result[0].path;

console.log("video data is below down = ")
console.log(videoPath)
fs.readFile(videoPath, (err, data) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error reading video file' });
  }
  // Set the appropriate content type for the video file
  const mimeType = 'video/mp4'; // Adjust this based on the video file type
  res.setHeader('Content-Type', mimeType);
  res.setHeader('Content-Disposition', `attachment; filename="${path.basename(videoPath)}"`);
  console.log("data is below  =  ");
  console.log(data)
 // res.setHeader('Content-Type', 'video/mp4');
  res.send(data);
});
    } else {
      res.status(404).json({ error: 'Video not found' });
    }






  });






});
//this below code is working perfectly oky
// app.post('/GetVideo',(req,res)=>{
//   console.log("GetVideo iss down below request is below ")
// //console.log(req)
// //  const sendId=req.query.sendId
// //  const recvId=req.query.recvId
//  const sendId=req.body.sendId
//  const recvId=req.body.recvId

// console.log(sendId)
// console.log(recvId)
// const querry ='select * from video where sendId=? and recvId=?';
// db.query(querry,[sendId,recvId],(err,result)=>{

//   console.log(result)
// if(err){
//   console.log('error in fetching video ')
//   return
// }
// console.log("result  video is down below = ")
// console.log(result[0].videoPath)
// const videoData = result[0];
// res.setHeader('Content-Type', 'video/mp4'); // Adjust the content type based on the file format
// res.setHeader('Content-Disposition', `attachment; filename="${videoData.filename}"`);

// // Read the video file from the file system and send it as the response
// fs.createReadStream(videoData.videoPath).pipe(res);
// // old response send 
// // res.send(result[0].video)

// })






// })









app.post('/send',(req,res)=>{

  // const { id,name_p, email, password_p } = req.body;
  // const id=req.body.id;
  console.log('request received from FrontEnd is = ')
  console.log(req.body);
  
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
   const phone=req.body.phone;
console.log('entered In API');

  db.query('SELECT name from users WHERE name = ?', [name], async (err, results) => {
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log('ftched Api is here below = down')
      console.log(hashedPassword);
// for now beause of autoincrement now id not mentioning 
      db.query('INSERT INTO reg SET ?', { name: name, email: email, password: hashedPassword,phone:phone}, (err, results) => {
          if (err) {
              console.log(err);
          } else {

            console.log(results)
              return  res.send("Form submitted");
              // res.sendFile(__dirname + "request.html", {
              //     message: 'User registered'
              // });
          }
      })
  })

  res.send("Form submitted");

})


 app.post('/searchM',  (req, res) => {

  console.log('Request received from Frontend:');
  country=req.body.country;
  console.log(country)
  const countryQuery =  `SELECT * FROM posts WHERE FromCountry = '${country}'`;

  db.query(countryQuery, (error, countries) => {
    if (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ error: 'An error occurred while fetching countries' });
    } else {
      console.log("countries is down below")
      console.log(countries);
      // Extract the pID values from the countries result
      const pIDs = countries.map((country) => country.pID);
      console.log("pID is down below");
      console.log(pIDs);
      // Fetch data from the "posts" table based on the extracted pIDs
   
      const postsQuery = `SELECT * FROM reg WHERE id IN (${pIDs.join(',')})`;
      db.query(postsQuery, (error, posts) => {
        if (error) {
          console.error('Error fetching posts:', error);
          res.status(500).json({ error: 'An error occurred while fetching posts' });
        } else {
          // Combine the results of both queries and send them to the frontend
       console.log("reg is down below");

       //we will apply image querry a querry to fetch images here  *****


      //  const query = 'SELECT image FROM imgTest WHERE id = ?';
      //  const values = [id];
     
       // Execute the SQL query
    //    db.query(query, values, (error, results) => {
    //      if (error) {
    //        console.error('Error retrieving the image from the database:', error);
    //        res.status(500).send('Error retrieving the image');
    //        return;
    //      }
     
    //      if (results.length === 0) {
    //        res.status(404).send('Image not found');
    //        return;
    //      }
     
    //      // Get the image data from the query results
    //      const imageBuffer = results[0].image;
    //  console.log("image is below ")
    //  console.log(imageBuffer)
    //     })








        console.log(posts)
          const response = {
             countries,
             posts,

          };
          res.json(response);
        }
      });
    }
  });
  
//   try {
//     const results = await new Promise((resolve, reject) => {
//       db.query(query, (error, results) => {
//         if (error) {
//           console.error('Error executing the query:', error);
//           reject(error);
//           return;
//         }
        
//         resolve(results);
//       });
//     });
    
//     save = results; 
//     let j=0
// // const fire=test(save);
// // console.log("retuned value from test function is below")
// // console.log(fire);
//   //   for (let i = 0; i < save.length; i++) {
//   //     console.log("initail  value of rest  is below ")
//   //     console.log(rest)
//   //      rest = await test(save[i].FromCountry);
//   //      let x=save[i].FromCountry
//   //     if(rest='a'){
//   //       i=save.length
//   //       console.log(rest);
//   //       rest = await test(x);
//   //       // rest =  test(save[i].FromCountry);
//   //      console.log(rest);

//   //       console.log("i is here = "+ i)
//   //     }
//   //    else{
//   //     console.log('Saved value resturned from test function is  is below:');
//   //     console.log(rest);
//   //  //   console.log(rest);
//   //    }
//   //     j=j+1;
//   //    //  saveId[i] = rest;
//   //    console.log("running loop iteration is   =  "+ j)
//   //   }
    
//     // res.send(results);
//   } catch (error) {
//     console.error('Error executing the query:', error);
//     res.status(500).send('An error occurred');
//   }




});

// app.post('/searchM', async (req, res) => {

app.get('/posts', (req, res) => {
  // Fetch countries from the "reg" table
  country=req.body.country;
  const countryQuery =  `SELECT * FROM posts WHERE FromCountry = '${country}'`;

  connection.query(countryQuery, (error, countries) => {
    if (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ error: 'An error occurred while fetching countries' });
    } else {
      console.log("countries is down below")
      console.log(countries);
      // Extract the pID values from the countries result
      const pIDs = countries.map(country => country.pID);
      console.log("pID is down below");
      console.log(pIDs);
      // Fetch data from the "posts" table based on the extracted pIDs
   
      const postsQuery = `SELECT * FROM posts WHERE id IN (${pIDs.join(',')})`;
      connection.query(postsQuery, (error, posts) => {
        if (error) {
          console.error('Error fetching posts:', error);
          res.status(500).json({ error: 'An error occurred while fetching posts' });
        } else {
          // Combine the results of both queries and send them to the frontend
          const response = {
            countries,
            posts
          };
          res.json(response);
        }
      });
    }
  });
});






app.post('/offers',(req,res)=>{
  let sendId=req.body.sendId;
  let recvId=req.body.recvId;
  let NewOffer=req.body.NewOffer;

const query='insert into offer (sendId,recvId,NewOffer) VALUES (?,?,?)'
  db.query(query,[sendId,recvId,NewOffer],(err,result)=>{
    if(err){
      console.log("error in saving the values in offer ")
     res.status(500).send('Error in saving values')
     return;
    }

res.status(200).send('values saved')

  })
})





app.post('/GetOffer',(req,res)=>{
const recvId=req.body.recvId;


const query =`SELECT * from offer where recvId='${recvId}'`

db.query(query,(err,result)=>{
  if(err){
    console.error('Error fetching offers:', error);
    res.status(500).json({ error: 'An error occurred while fetching countries' });
  }
  else{
    //this below code would separate sendId from offer table
    const idN = result.map((c) => c.sendId);
      console.log("id is down below");
      console.log(idN);
      const showOffer=`select id,name from reg where id IN (${idN.join(',')})`
  db.query(showOffer,(err,offers)=>{
    if(err){
      console.error('Error fetching countries:', error);
      res.status(500).json({ error: 'An error occurred while fetching countries' }); 
    }
    else{
      console.log("reg are below");
      console.log(offers);
      console.log("offers are below");
      console.log(result)
      console.log("offers images  are below");
      console.log(offers[0].image)
    }
      const response={
    offers,
    result
  }

    res.send(response);

  })
  
    }

})


})
app.post('/searchCountries',(req,res)=>{


  console.log('request  u received from Frontend is = ')
  // console.log(req.email);
 // console.log(req)
  const country = req.body.email;
  // const id = req.body.LoginId;
  console.log(country)
  const query = `SELECT * FROM posts WHERE FromCountry = '${country}'`;
  
  // Execute the query
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      return;
    }
  
    else{

        console.log('Query results:');
        console.log(results)
    res.send(results)
    
  }
  });
  
 
  // Close the database connection
  // connection.end((error) => {
  //   if (error) {
  //     console.error('Error closing the database connection:', error);
  //     return;
  //   }
  //   console.log('Database connection closed');
  // });

})








// app.post('/NewPost',(req,res)=>{


//   console.log('request  u received from Frontend is = ')
//   // console.log(req.email);
//   console.log(req)
//   console.log('request received from FrontEnd is = ')
//     console.log(req.body);
//     const pID=req.body.pID; 
//     const ToCountry=req.body.ToCountry;
//     const FromCountry=req.body.FromCountry;
//     const post=req.body.post;
//      const wgt=req.body.wgt;
//   const query = `SELECT * FROM posts WHERE country = '${country}'`;
  
//   // Execute the query
//   db.query(query, (error, results) => {
//     if (error) {
//       console.error('Error executing the query:', error);
//       return;
//     }
  
//     else{

//         console.log('Query results:');
//         console.log(results)
//     res.send(results)
    
//   }
//   });
  
 
//   // Close the database connection
//   // connection.end((error) => {
//   //   if (error) {
//   //     console.error('Error closing the database connection:', error);
//   //     return;
//   //   }
//   //   console.log('Database connection closed');
//   // });

// })

// Define the route to save the values in the database
app.post('/NewPost', (req, res) => {
console.log(req.body)
  const pID = req.body.pID;
  const ToCountry = req.body.ToCountry;
  const FromCountry = req.body.FromCountry;
  const price=req.body.price
  const post = req.body.post;
  const wgt = req.body.wgt;


  // Prepare the SQL query
  const query = 'INSERT INTO posts (pID, ToCountry, FromCountry,price, post, wgt) VALUES (?, ?, ?, ?, ?,?)';

  // Execute the SQL query with the values as parameters
  db.query(query, [pID, ToCountry, FromCountry,price, post, wgt], (error, results) => {
    if (error) {
      console.error('Error saving the values to the database:', error);
      res.status(500).send('Error saving the values');
      return;
    }
     console.log('Values saved to the database');

    res.send('Values saved');
  });
});




app.post('/login',(req,res)=>{
  console.log('request from frontend fo ligin is = ')
  console.log(req.body.name);
  console.log(req.body.password);
  const name=req.body.name;
  db.query("SELECT * FROM reg WHERE name = ? ", [name], function(error, results) {
    if(error) throw error;
    else { 
  
      console.log('Entering else  statement')
        if(results.length > 0) { 
        
        bcrypt.compare(req.body.password, results[0].password, function(err, result) {
         if(result) {
         // console.log("results are here below = ")
           return res.status(200).send({ id: results[0].id,country:results[0].country });
        
         }
         else {
           return res.status(400).send({ message: "Invalid Password" });
         }
        });
    } else {
        return res.status(400).send({ message: "Invalid Email" });
    } 
    }
  });
  
  })
  





server.listen(3000, function () {
  console.log('listening on *:3000');
});