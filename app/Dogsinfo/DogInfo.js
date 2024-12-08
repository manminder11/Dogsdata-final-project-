"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DogInfo = () => {
  const [dogBreeds, setDogBreeds] = useState(null);
  const [dogImages, setDogImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const fetchDogBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched dog breeds:", data.message);
        setDogBreeds(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog breeds:", error);
        setError(error.message);
      });
  };

  const fetchDogImages = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched dog images:", data.message);
        setDogImages([data.message]);
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
        setError(error.message);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchDogImages(searchTerm.toLowerCase());
    }
  };

  const renderBreeds = (breeds) => {
    return (
      <ul className="list-disc pl-5 space-y-2">
        {Object.keys(breeds).map((breed) => (
          <li key={breed} className="mb-1 bg-gray-100 hover:bg-gray-200 transition duration-300 p-2 rounded-lg">
            <span className="font-semibold text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer">{breed}</span>
            {breeds[breed].length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {breeds[breed].map((subBreed) => (
                  <li key={subBreed} className="mb-1 bg-gray-50 hover:bg-gray-100 transition duration-300 p-2 rounded-lg">
                    <span className="text-gray-700 hover:text-gray-900 transition duration-300 cursor-pointer">{subBreed}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600 transition duration-300" onClick={fetchDogBreeds}>
        Fetch Dog Breeds
      </button>
      {error && <p className="text-red-500">Error fetching dog info: {error}</p>}
      {dogBreeds ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Dog Breeds</h2>
          {renderBreeds(dogBreeds)}
        </div>
      ) : (
        <p>No breeds data fetched yet.</p>
      )}
      {dogImages.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Dog Images</h2>
          <div className="flex flex-wrap">
            {dogImages.map((image, index) => (
              <div key={index} className="m-2">
                <Image
                  src={image}
                  alt="Dog"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-lg shadow-md hover:shadow-lg transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DogInfo;
