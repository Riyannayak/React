// import React from "react";

// const Header = () => {
//   return (
//     <div className="w-full h-[100px] bg-orange-400"></div>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
