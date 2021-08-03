const express = require('express');
const fs = require('fs');
const path = require('path')

const file = path.join('.', 'src', 'data.json')

const app = express(); 
const port = 5000;

app.use(express.static('public'));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  res.json(data);
})

app.get('/', (req, res)=>{
  res.sendFile('./build/index.html');
});
  
app.listen(port, () => {
   console.log(`listening at http://localhost:${port}`)
})