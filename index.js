var app=require('express')();
var http=require('http').Server(app);
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

http.listen(3000, function(){
	console.log('listening on *:3000');
});