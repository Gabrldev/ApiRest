require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConect = require('./config/mongo');
const logger = require('./utils/handlewebhook');
const morganbody = require('morgan-body');



const app = express();
app.enable("trust proxy");
app.use(cors());
app.use(express.json());
app.use(express.static('storage'))


morganbody(app,{
    noColors: true,
    stream: logger,
    skip: function (req, res) { return res.statusCode < 400 }

});

const port = process.env.PORT || 3000;

// aca van las rutas
app.use('/api/', require('./routes'))

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

dbConect();
