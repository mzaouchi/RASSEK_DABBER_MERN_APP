const express = require('express')
const ConnectDB = require('./config/ConnectDB');
const routerApplication = require('./routes/application');
const router = require('./routes/auth');
const routerPost = require('./routes/post');

const app = express()

require('dotenv').config()

ConnectDB();

app.use(express.json())
app.use('/upload',express.static('upload'))
app.use('/api/users', router)
app.use('/api/posts', routerPost)
app.use('/api/applications', routerApplication)

app.listen(process.env.Port,console.log(`💻 is 🏃‍♂️🏃‍♂️🏃‍♂️ on 🚪 : ${process.env.Port}`))