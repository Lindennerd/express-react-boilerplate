module.exports = function(){
	var express = require('express');
	var reactViews = require('express-react-views');
	var path = require('path');

	var routes = require('../routes/routes');

	var app = express();
	app.set('port', process.env.PORT || 3000); 
	app.set('views','./views');
	app.set('view engine', 'jsx');
	app.engine('jsx', reactViews.createEngine());
	app.use(express.static(path.join(__dirname, 'public')));

	app.get('/', routes.index);

	return app;
}