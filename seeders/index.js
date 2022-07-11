const express = require("express");
const app = express();
var cors = require('cors');
const sql_lms = require('./connector-mysql');

//routing;
const users = require('./models/users');
const courses = require('./models/courses');
const sections = require('./models/sections');
const lessons = require('./models/lessons');

//router object
app.use(cors());
app.use('/',users);
app.use('./models/courses', courses);
app.use('./models/sections', sections);
app.use('./models/lessons', lessons);

const dbMysql = require("./connector-mysql");
let account = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database : 'sql_lms',
    port: '3306',
    }

var conMysql=new dbMysql(account);
conMysql.connect();

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});