const express = require('express')

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors')



// ************************ DB Connection ************************

var dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };

mongoose.connect("mongodb+srv://rb:rb@cluster0-cdvk5.mongodb.net/test?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function () {

    console.log("Connected to DB");

})

mongoose.connection.on('error', function (err) {

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************







const app = express()


app.use(cors())




// ****** Body Parser *******

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())

// ****** Body Parser ********
var Schema = mongoose.Schema;


var userSchema = new Schema({


    username: String,
    password: String,
    emailid: String
});
var feedbackSchema = new Schema({

    username: String,
    comments: String

})


var User = mongoose.model("User", userSchema);

var Feedback = mongoose.model("Feedback", feedbackSchema);




// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', (req, res) => {
    console.log(req.body);
    User.find({ "username": req.body.username }, (err, docs) => {
        if (docs.length == 1) {
            if (req.body.password == docs[0].password) {
                res.json({
                    'message': 'success'
                })
            }
            else {
                res.json({
                    'message': 'password wrong'
                })
            }
        }
        else {
            res.json({
                'message': 'wrong username'
            })
        }
    })



})
app.get('/users', (req, res) => {
    User.find({}, (err, docs) => {
        res.json(docs);
    })
})
//for register
app.post('/register', (req, res) => {
    var newUser = new User(req.body);
    newUser.save((err, doc) => {
        res.json(doc);
    })
})

//for feedback
app.post('/feedback', (req, res) => {
    var feedback = new Feedback(req.body);
    feedback.save((err, doc) => {
        res.json(doc);
    })
})

app.get('/feedback', (req, res) => {
    Feedback.find({}, (err, docs) => {
        res.json(docs);
    })
})








// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
