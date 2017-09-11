var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var db = require('./models');
var app = express ();
var controller = require('./controllers/burger_controllers.js');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))


db.sequelize.sync().then(()=>{
  controller(app, db);
  require ('./routes/html_routes.js')(app, db);
  app.listen(port, ()=>{
    console.log('served started on port', port);
  });

});
