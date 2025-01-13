import express from 'express';
const app = express();
const PORT=3003;
app.get('/',(req, res)=>{
  res.send("coding first");
  )};
app.listen(PORT,()=>{
  console.log("Hello server start running now ");
  )};
