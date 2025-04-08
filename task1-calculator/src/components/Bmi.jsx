import React, { useState } from 'react';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');
  const bmiCategory = (bmi) => {
    // console.log(`BMI: ${bmi}`);
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
};

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue);
      // let c = 
      // console.log(c)
      setCategory(bmiCategory(bmiValue));
      // console.log(category);
    }
  };



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
            <p className="text-xl font-semibold">Your BMI: {bmi.toFixed(2)}</p>
            <p className="text-lg mt-2 text-gray-700">Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BmiCalculator;
