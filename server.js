//1. SERVER REQUIRE
const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// # RESTful API
const items         = require('./routes/api/items'); // require api 


//2. DECLARE MAIN APP
const app = express();

//3. Use MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//4. connect to db
    // require file config
const db = require('./dev_config/connect_db').mongoURI;
    // connect
mongoose
    .connect(db)
    .then(() => console.log('connect mongoose success!'))
    .catch(err => console.log(err + " Error Error!"))
;        

//5. use Routes
app.use('dev/', items);
//app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',(req,res)=> {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`connect to port: ${port}`));
