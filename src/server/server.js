var express = require('express')
import routes from './routes/routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import env from './db/env';
import mongoose from 'mongoose';


const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/api', routes);

const server = app.listen(3010, () => {
    const { address, port } = server.address();
    console.log('Listening on --> http://localhost:' + port)
})


connectMongo();

function connectMongo() {
    'use strict'
    let options = { server: { socketOptions: { keepAlive: 1 }, reconnectTries: 3 } }
    mongoose.Promise = global.Promise
    mongoose.connection.on("open", (ref) => {
        console.log("Connected to mongo db")
    })
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting mongo db" + err)
    })

    mongoose.connect(env.mongoDB)
    console.log('Connected to mongo db: ' + env.mongoDB)
}