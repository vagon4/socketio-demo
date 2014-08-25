var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

/*
//Deprecated
app.get('/', function(req,res){
	res.sendfile('index.html');
});

//Works but more typing
app.get('/', function(req,res){
	res.sendFile('index.html', {root: '/home/action/workspace/'});
});
*/

app.get('/', function(req,res){
	res.sendFile('/home/action/workspace/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message',function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg);
	});
	socket.on('disconnect',function(){
		console.log('user disconnected');
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});