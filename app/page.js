"use client";

import React from 'react';
import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  return (
    <div className="p-8 min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center">Dog Information</h1>
        </div>
        <DogLayout />
      </div>
    </div>
  );
}
