"use client";

import React from 'react';
import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  return (
    <div className="p-4 min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Dog Information</h1>
        </div>
        <DogLayout />
      </div>
    </div>
  );
}
