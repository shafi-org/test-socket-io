const express = require('express')
const app = express()
const server = require('http').createServer(app);
const socketIo = require('socket.io')
const Server = socketIo.Server

const io = new Server(server, { cors:{origin:"*"},path: '/api/v1/ws/game1'});

io.on("connection", (socket) => {
    socket.on('message', (data) =>{

    })
});

app.get('/',(req,res)=>{
    res.render('index')
})

server.listen(5000);