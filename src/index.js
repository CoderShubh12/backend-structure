import dotenv from "dotenv/config.js";
import connectDb from "./db/index.js";
import app from "./app.js";
import router from "./routes/user.routes.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, (req, res) => {
      // res.send("servver startrd");
      console.log(`server is runniing at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!", error);
  });

// using iife function
// import express from express
// const app=express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("not able to connect to database")
//         throw ErrorEvent
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listeening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
