const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();

const PORT = 5000;

const ip = 'localhost';

//app.use(cors())
app.use(express.json({strict:false}));

app.options('/upper', cors(), function(req, res, next) {
  res.writeHead(200, {});
  res.end()
})

app.options('/lower', cors(), function(req, res, next) {
  res.writeHead(200, {});
  res.end()
})

app.post('/upper', cors(), function (req, res, next) {
  
  res.json(req.body.toUpperCase())
  /*
  let body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
    console.log(chunk);    
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    
    res.writeHead(200, {});
    res.end(body.toUpperCase());
  })
  */
})

app.post('/lower', cors(), function (req, res, next) {
  res.json(req.body.toLowerCase())
  /*
  req.on('data', (chunk) => {
    body.push(chunk);
    console.log(chunk);    
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    
    res.writeHead(200, {});
    res.end(body.toLowerCase());
  })
  */
})

/*
const server = http.createServer((request, response) => {     
  
  if(request.method === 'OPTIONS') {
    response.writeHead(204, defaultCorsHeader);
    response.end();
  }
  
  if(request.method === 'POST' && request.url === '/upper') {
    let body = [];
    
    request.on('data', (chunk) => {
      body.push(chunk);
      console.log(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.statusCode = 200;
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Max-Age', 10)

      //response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
      response.end(body.toUpperCase());
    })
  }  
  else if(request.method === 'POST' && request.url === '/lower') {
    let body = [];
    
    request.on('data', (chunk) => {
      body.push(chunk);
      console.log(request)
      console.log(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();      
      response.writeHead(200, {'Access-Control-Allow-Origin': '*'});
      response.end(body.toLowerCase());
    })
  }
  else {
    response.writeHead(400, {'Access-Control-Allow-Origin': '*'});
    response.end();
  }

  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
});
*/

app.listen(PORT, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});


const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};
