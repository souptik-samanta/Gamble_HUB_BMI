function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
  
    if (!weight || !height) {
      alert("Please enter valid inputs.");
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = `Your BMI: ${bmi}`;
  
    let advice = "";
    if (bmi < 18.5) advice = "Underweight: Try eating more nutritious food.";
    else if (bmi < 25) advice = "Healthy: Keep maintaining your lifestyle.";
    else if (bmi < 30) advice = "Overweight: Start regular workouts.";
    else advice = "Obese: Consult a healthcare provider.";
  
    document.getElementById("bmi-advice").innerText = advice;
  }
  
  const tips = [
    "Drink 2-3 liters of water daily.",
    "Exercise for 30 minutes every day.",
    "Avoid sugary drinks and junk food.",
    "Sleep for at least 7 hours at night.",
    "Eat more fruits and vegetables."
  ];
  
  let currentTip = 0;
  setInterval(() => {
    currentTip = (currentTip + 1) % tips.length;
    document.getElementById("health-tip").innerText = tips[currentTip];
  }, 5000);
  