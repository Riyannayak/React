// import { useState} from "react";


// function App() {
//   const [value,setValue] = useState(0)
//   const increment = () => {
//     setValue(value + 1)
//     console.log(value);
//   }
//   const decrement = () => {
//     setValue(value - 1)
//     console.log(value);
//   }

//   return (
//     <>
//       <div>
//         <h2>{value}</h2>
//         <button onClick={decrement}>-</button>
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   )
// }

// export default App
import React from "react";
import BMICalculator from "./components/Bmi";

function App() {
  return (
    <div>
      <BMICalculator />
    </div>
  );
}

export default App;