"use client";

import React, { useState } from 'react';
import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`p-4 min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Dog Information</h1>
          <button className="btn btn-primary" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <DogLayout  />
      </div>
    </div>
  );
}
