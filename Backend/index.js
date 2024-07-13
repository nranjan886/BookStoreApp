import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors'
const app = express()

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL

// connect to mongoDB

try{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        UseUnifiedTopology: true
    });
    console.log("MONGODB connected.")
}catch(error){
    console.log("Error: ", error);
}

// Defining routes
app.use('/book',bookRoute)

app.use('/user',userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})