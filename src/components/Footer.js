import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="p-10 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto">
         <div className="px-10 pb-8">
           <div className="text-center text-xl font-bold">
            <div>
           
            </div>
           </div>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-0.5">
            <div className="mb-5 ml-10">
              <h4 className="font-bold text-white text-xl pb-2"> Menu </h4>
              <ul>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Home</Link> </li>
                <li className="pb-2"><Link to="/dashboard" className="hover:text-blue-800">Profile</Link></li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
