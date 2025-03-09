//Step -1. Load the driver
var  mssql=require('mysql');
var  exp=require('express');
var  cors=require('cors');
var  bparser=require('body-parser');
bparserInit=bparser.urlencoded({extended:true});
var  app=exp(); //Initializing expressjs.
app.use(cors());
app.use(exp.json());
//mysql
mssqlconnection=mssql.createConnection({
     host:'localhost',
     database : 'world',
     user : 'root',
     password : 'root',
     port : 3306
 });
function checkConnection(error){
    if(error == undefined){
        console.log("Connected to the database....");
    }else{
        console.log("Error code : " + error.errno)
        console.log(error.message);
    }
}
function  feedBack(error){
    if(error != undefined)
    {
        console.log(error.errno);
        console.log(error.message);
    }else
        console.log
    ("Open the browser and visit this url http://localhost:9901/getAll")
}

app.listen(9901, feedBack);

var queryresults=undefined;
function  processResults(error,  results){
    queryresults=results;
    console.log(results);
}
function displayAllUsers(request, response){
    mssqlconnection.connect(checkConnection);
    mssqlconnection.query('select  *  from  users', processResults);
    response.send(queryresults);
}

app.get('/getAll', displayAllUsers);
function getUserById(request, response){
    var userid=request.query.uid;
    //Parameterized SQL
    mssqlconnection.query('select  *  from  users where userid=?', 
     [userid], processResults);

     //select  * from   users where  userid='aaa1';
    response.send(queryresults);
}

app.get('/getById', getUserById);

var  statusMessage="";
function  checkInsertStatus(error){
    (error == undefined)?statusMessage="<B>Insert successful</b>":
     statusMessage="<b>Insert failure " + error.message + "</b>";
}
function  insertUser(request,  response){
    userid=request.body.uid;
    password=request.body.password;
    emailid=request.body.emailid;
    console.log(userid + "\t\t" + password + "\t\t" + emailid);
    mssqlconnection.connect(checkConnection);

    mssqlconnection.query(
        'insert into  users  values (?, ?, ?)',
        [userid,password,emailid], checkInsertStatus);

    response.send(statusMessage);
}
app.post('/insert', bparserInit, insertUser);
