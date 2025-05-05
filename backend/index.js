const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;
const connectToSocket = require('./Controllers/SocketManger.js')

const app = express();
const server = http.createServer(app);
const io = connectToSocket(server)


const Meeting = require('./Models/Meeting.js');
const User = require('./Models/UserModel.js')




// const io = new Server(server, {
//   cors: { origin: "*" }
// });



// app.use(cors("*"));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


app.use("/", authRoute);

const meetings ={}

// // 📌 **Create a Meeting & Generate Unique URL**
app.post('/create-meeting', (req, res) => {
    const meetingId = uuidv4();
    meetings[meetingId] = { participants: {} };
    res.json({ 
        meetingId, 
        meetingUrl: `http://localhost:5173/meeting/${meetingId}` 
    });
});


server.listen(PORT, () => {
      
  console.log(`Server is listening on port ${PORT}`);
});


