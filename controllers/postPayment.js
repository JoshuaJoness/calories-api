const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const nodemailer = require('nodemailer')

module.exports = (req,res) => {
	console.log('!!!!!!!!!!!!!!',req.body);

	let email = req.body.email

	let transporter = nodemailer.createTransport({
		service:'gmail',
		auth:{
			user:'joshuajoneslive@gmail.com',
			pass:'$hreddedandJacked1'
		}
	})

	let mailOptions = {
		from: 'joshuajoneslive@gmail.com',
		to: email,
		subject: 'Test',
		text: 'Testing my test!',
		attachments: [{
			filename: 'Essay.pdf', path: './Essay.pdf'
		}]
	}

	stripe.customers.create({
		email: email
	})

	stripe.charges.create({
  amount: 100,
  currency: 'usd',
  description: '',
  source: req.body.data
}).then(data => {
	res.send(data)
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent:' + info.response);
		}
	})
}).catch(err=>{
	console.log(err);
})
}
