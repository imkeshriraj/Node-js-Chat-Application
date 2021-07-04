//Node Server which handle socket io connection 

const { Socket } = require('socket.io');

const io =require('socket.io')(8000);

const users ={};

io.on('connection',Socket=>{

    Socket.on('new-user-joined',name=>{
        users[Socket.id]=name;
        Socket.broadcast.emit('user-joined',name);


    });

    Socket.on('send',messagee=>{
        Socket.broadcast.emit('receive',{message:message,name:users[Socket.id]})
    });

    
});