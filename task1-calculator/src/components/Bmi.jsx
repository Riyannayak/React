import React, { useState } from 'react';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue);
      setCategory(getBmiCategory(bmiValue));
    }
  };

  const Bmi= () => {
    const h = height / 100;
    const bmi = weight / (h * h)
    setBmi(bmi);
    if (bmi < 18) {
        setStatus('Underweight')
    } else if (bmi >= 18 && bmi <= 24) {
        setStatus('Normal weight')
    } else if (bmi >= 25 && bmi <= 29) {
        setStatus('Overweight')
    } else if (bmi >= 30) {
        setStatus('Obesity')
    }
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="  p-8 w-full max-w-md">
       

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg "
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg"
        />

        <button
          onClick={calculateBmi}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold">Your BMI: {bmi}</p>
            <p className="text-lg mt-2 text-gray-700">Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BmiCalculator;
