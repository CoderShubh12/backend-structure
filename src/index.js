import dotenv from "dotenv/config.js";
import connectDb from "./db/index.js";
connectDb();

// using iife funvtion
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
