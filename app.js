require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConect = require('./config/mongo');
const morganbody = require('morgan-body');
const discordWebhook = require('webhook-discord');

const Hook = new discordWebhook.Webhook(process.env.WEBHOOK_URL);


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('storage'))

const logger = {
    write: messagge =>{
        Hook.err("ERROR API REST", messagge)
    }
}
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
