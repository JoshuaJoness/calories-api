module.exports = (req, res) => {

	console.log(req.body)

	let bmr = 0
	let totalDailyCalorieNeeds = 0

	if (req.body.gender === 'female') {
		bmr = 655 + (4.35 * req.body.weight) + (4.7 * req.body.totalInches) - (4.7 * req.body.age)
	} else {
		bmr = 66 + (6.23 * req.body.weight) + (12.7 * req.body.totalInches) - (6.8 * req.body.age)
	}
	if (req.body.activityLevel === 'low') {
		totalDailyCalorieNeeds = bmr * 1.2
	} else if (req.body.activityLevel === 'mid') {
		totalDailyCalorieNeeds = bmr * 1.375
	} else {
		totalDailyCalorieNeeds = bmr * 1.55
	}

	let maintain = JSON.stringify(totalDailyCalorieNeeds)
	let loseWeight = JSON.stringify(totalDailyCalorieNeeds - 500)
	let gainWeight = JSON.stringify(totalDailyCalorieNeeds + 500)


	res.send({maintain, loseWeight, gainWeight})
}
