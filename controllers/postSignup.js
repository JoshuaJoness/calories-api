module.exports = (req,res) => {
	const email = req.body.email
	res.send(email)
}
