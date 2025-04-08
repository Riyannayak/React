import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center text-sm">
    <div className="flex justify-evenly pb-20">
      <div className="h-10 ">
    <p className="text-lg font-semibold">My Portfolio</p>
    <p className="text-gray-400 h-10">Crafting beautiful experiences.
    <br />
      I strive to create innovative <br />and impactful work that meets the <br />needs of clients and audiences.</p>
    </div>
    <div className="h-10 ">
      <p className="text-lg font-semibold"> Support</p>
      <ul className="text-gray-400 ">
            <li><a href="#" className="hover:bg-sky-700">Home</a></li>
            <li><a href="#" className="hover:bg-sky-700">About</a></li>
            <li><a href="#" className="hover:bg-sky-700">Projects</a></li>
            <li><a href="#" className="hover:bg-sky-700">Contact</a></li>
          </ul>
    </div>
    <div className="h-10">
      <p className="text-lg font-semibold"> QuickLinks</p>
      <ul className="text-gray-400 ">
            <li><a href="#" className="hover:bg-sky-700">Home</a></li>
            <li><a href="#" className="hover:bg-sky-700">About</a></li>
            <li><a href="#" className="hover:bg-sky-700">Projects</a></li>
            <li><a href="#" className="hover:bg-sky-700">Contact</a></li>
          </ul>
    </div>
    <div className="h-10">
      <p className="text-lg font-semibold"> Category</p>
      <ul className="text-gray-400 ">
            <li><a href="#" className="hover:bg-sky-700">Home</a></li>
            <li><a href="#" className="hover:bg-sky-700">About</a></li>
            <li><a href="#" className="hover:bg-sky-700">Projects</a></li>
            <li><a href="#" className="hover:bg-sky-700">Contact</a></li>
          </ul>
    </div>
   </div>
{<div className="border-t border-gray-600  py-2"></div>}

  <p className=" flex justify-start -mb-3" >&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="space-x-4 -mb-5 pl-200">
        <a href="#" className="hover:text-gray-400"> Follow me on : LinkedIn</a>
        <a href="#" className="hover:text-gray-400">GitHub</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
      </div>
    
  <p className="flex justify-end" >Designed by : Riyan</p>
    
  </footer>
  );
};

export default Footer;
