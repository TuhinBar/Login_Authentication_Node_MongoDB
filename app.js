require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var tokens =[];

// Database connection
mongoose.connect('mongodb://localhost:27017/usersDB', {useNewUrlParser: true, useUnifiedTopology: true});

// Database schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

// Database model
const User = new mongoose.model('User', userSchema);

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.get("/register", (req, res) => {
    res.render('register');
});


app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: md5(req.body.password)
    });
    newUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render('success');
        }
    });
});

app.post("/login", (req, res) => {
    const email_id = req.body.logEmail;
    const password = md5(req.body.logPassword);


    
    User.findOne({email: email_id}, async (err, foundUser) => {
        if (err) {
            console.log(err);
            
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    let userToken = await createToken(foundUser._id);
                    tokens.push(userToken);
                        if (tokens.length > 2) {
                                tokens =[]
                                res.render('limit');    
                        } else{

                            res.render('loginsuccess');
                        }
                    
                } else {
                    res.render('loginfailed');
                }
            }
        }
    });
});

app.get('/logout', (req, res) => {
    tokens=[];
        res.redirect('/');
});

app.get('/logoutfromall', (req, res) => {
    tokens=[];
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


const createToken = async (id) => {
    const token = await jwt.sign({user: id}, process.env.SECRET_TOKEN_KEY);
        const userVar = await jwt.verify(token, process.env.SECRET_TOKEN_KEY);
        if(userVar){
            return token;
        }

}

