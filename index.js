const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;


app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome To our API!");
})

app.use('/api', require('./Routes/translate'));


app.listen(port, () =>{
    console.log("App is listening on port :  7000");
})