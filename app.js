require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConect = require('./config/mongo');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('storage'))

const port = process.env.PORT || 3000;

// aca van las rutas
app.use('/api/', require('./routes'))

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

dbConect();
