const express = require('express');
const Mongoose = require('mongoose');
const CORS = require('cors');

const app = express();

const MONGOURL = 'mongodb+srv://admin-yash:Yashjain12@cluster0.fqsmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db = async () => {
    try{
     await Mongoose.connect(MONGOURL,{ useNewUrlParser: true, useUnifiedTopology: true });
     console.log('db connected');
    }catch(err){
     console.log(err.message);
     process.exit(1);
    }
}

db();


app.use(express.json({extended : false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use('/api/crypto', require('./routes/api/crypto'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
});

