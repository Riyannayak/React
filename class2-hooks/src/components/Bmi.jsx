import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      // Determine BMI Category
      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Overweight");
      } else {
        setStatus("Obese");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div>
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h4>Status: {status}</h4>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;  