const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
const User= require('./models/user.js')
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken')
const CookieParser =require('cookie-parser');

const bcryptsalt= bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

require('dotenv').config(); 
const app = express();
const port = 2000;

app.use(express.json());
app.use(CookieParser());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both origins
}));

const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.get('/profile', (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
});


// ... (previous code)
app.post('/login', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {email,password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {

      jwt.sign({
        email:userDoc.email,
        id:userDoc._id
      },  jwtSecret  , {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.json('not found');
  }
});


// ... (rest of the code)


app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with the same email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  const userDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptsalt),
  });

  res.json(userDoc);
  

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
