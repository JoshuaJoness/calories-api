//
// Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
//
// Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
//
//
// If you are sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2
// If you are lightly active (light exercise/sports 1-3 days/week) : Calorie-Calculation = BMR x 1.375
// If you are moderatetely active (moderate exercise/sports 3-5 days/week) : Calorie-Calculation = BMR x 1.55
// If you are very active (hard exercise/sports 6-7 days a week) : Calorie-Calculation = BMR x 1.725
// If you are extra active (very hard exercise/sports & physical job or 2x training) : Calorie-Calculation = BMR x 1.9

// male or female -> weight -> height (convert to inhes) -> (age in years) FLOW

module.exports = (weight, inches, age, activity level) => {
	let mbr = 655 + (4.35 * weight) + (4.7 * height in inches) - (4.7 * age)
	if (activity level is low) {
		return mbr * 1.2
	} else (activity level high) {
		return mbr * 1.55
	}
}
