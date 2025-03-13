const express=require('express')
const app=express()
Port=3000;
const events=require('./router/eventRouter')
const users=require("./router/userRouter")
const connectDB=require('./db/db')
connectDB();

app.use("/api",events);
app.use("/api/user",users);



app.listen(Port,()=>{
    console.log("app is listening")
})