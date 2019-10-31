const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors({credentials: true}))

app.post('/calories', require('./controllers/postCalories'))


app.listen(4000, () => {
	console.log('Ready on port 4000');
})
