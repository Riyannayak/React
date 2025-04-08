
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 ">
        <h2 className="text-2xl font-semibold mt-20 pl-30 ">Hloo..</h2>
        <p className="text-2xl  text-gray-600 mt-2 pl-50">welcome to Riyan's portfolio</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
