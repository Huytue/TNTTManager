var express = require("express"); //ket noi express
var app = express();
var bodyParser = require("body-parser");


const routeStudent = require('./routes/student');
const routePhanDoan = require('./routes/phandoan');
const routeChiDoan = require('./routes/chidoan');
const routeAdmin = require('./routes/admin');
const routeHome = require('./routes/home');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set("views", "./views");


//ket noi mongodb
const mongoose = require("mongoose");
const { render } = require("ejs");

mongoose.connect("mongodb://localhost/StudentManagement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("mongo connection successfully");
});


app.use("/student", routeStudent);
app.use("/phandoan", routePhanDoan);
app.use("/chidoan", routeChiDoan);
app.use("/admin", routeAdmin);
app.use("/", routeHome);
app.listen(3000);