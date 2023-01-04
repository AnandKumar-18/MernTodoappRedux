import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const USER = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {
  const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@mern-todo.frxifhf.mongodb.net/todoapp?retryWrites=true&w=majority`;
  mongoose.set('strictQuery', false);
  mongoose.connect(MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true,})
    .then(() => {
      console.log("db connected");
    })
    .catch(() => console.log("not connected"));


    //for deprication warnning
    // {
    //     useNewUrlParser: true,
    //     useCreateIndex:true,
    //     useUnifiedTopology: true,
    //     useFindAndModify:false
    //   }

 
};

export default Connection;
