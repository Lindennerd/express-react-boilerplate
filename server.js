var app = require('./config/express')();

app.listen(3000, function(){
	console.log('Listenning to port '+3000);
})