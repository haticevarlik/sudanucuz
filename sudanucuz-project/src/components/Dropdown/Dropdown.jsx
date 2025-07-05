import React, {useState} from "react";
import { ChevronDown } from "lucide-react";
import './Dropdown.css';


export default function Dropdown(){

  return (
    <div className="relative group">
      <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 flex items-center">
        Shop
        <ChevronDown className="w-4 h-4" />
      </button>
        <div className="absolute left-0 top-full w-[600px] bg-white shadow-lg z-50 p-6 hidden group-hover:grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Kadın</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Bags</a></li>
              <li><a href="#" className="hover:text-blue-500">Belts</a></li>
              <li><a href="#" className="hover:text-blue-500">Cosmetics</a></li>
              <li><a href="#" className="hover:text-blue-500">Bags</a></li>
              <li><a href="#" className="hover:text-blue-500">Hats</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Erkek</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Bags</a></li>
              <li><a href="#" className="hover:text-blue-500">Belts</a></li>
              <li><a href="#" className="hover:text-blue-500">Cosmetics</a></li>
              <li><a href="#" className="hover:text-blue-500">Bags</a></li>
              <li><a href="#" className="hover:text-blue-500">Hats</a></li>
            </ul>
          </div>
        </div>
    </div>
  );
};