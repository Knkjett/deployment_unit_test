const express = require('express');
const app = express();
const port = 5001;

app.get('/ping',(req,res)=>{
  res.status(200);
  res.json({'ping':'🏓'})
});

app.listen(port,()=>{
  console.log(`Listening on port: ${port}`)
})