var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
var routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
});