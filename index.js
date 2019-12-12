const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const stripe = require("stripe")("sk_test_yourkey")

require('dotenv').config()


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(cors({credentials: true}))


app.post('/payment', require('./controllers/postPayment'))

app.post('/essay', require('./controllers/postEssay'))

app.post('/calories', require('./controllers/postCalories'))

app.post('/signup', require('./controllers/postSignup'))

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`);
})
