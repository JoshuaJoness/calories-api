const nodemailer = require('nodemailer')

module.exports = (req,res) => {
	let email = req.body.email

	let transporter = nodemailer.createTransport({
		service:'gmail',
		auth:{
			user:'joshuajoneslive@gmail.com',
			pass:`${process.env.PASSWORD}`
		}
	})

	let mailOptions = {
		from: 'joshuajoneslive@gmail.com',
		to: email,
		subject: 'Thank You for Signing Up!',
		text: 'Thank you for signup up to my mailing list! I will strive to ensure that I send you high quality content of value. All the best, Joshua',
		attachments: [{
			filename: 'Essay.pdf', path: './Essay.pdf'
		}]
	}

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent:' + info.response);
		}
	})
}
