function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value; // Weight in kg
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2); // BMI formula
        let message = `Your BMI is ${bmi}.`;

        // Determine BMI category
        if (bmi < 18.5) {
            message += " You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message += " Your BMI is normal.";
        } else if (bmi >= 25 && bmi < 29.9) {
            message += " You are overweight.";
        } else {
            message += " You are obese.";
        }

        document.getElementById('bmiResult').textContent = message;
    } else {
        document.getElementById('bmiResult').textContent = 'Please enter valid height and weight.';
    }
}
