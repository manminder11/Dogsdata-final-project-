"use client";

import React, { useState } from "react";
import Image from "next/image";

const Images = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dogImages, setDogImages] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <form onSubmit={handleSearch} className="m-2">
        <input
          type="text"
          placeholder="Search for a breed"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-secondary mt-2">
          Search
        </button>
      </form>
      {error && <p>Error fetching dog info: {error}</p>}
      {dogImages.length > 0 && (
        <div>
          <h2>Dog Images</h2>
          <div className="d-flex flex-wrap">
            {dogImages.map((image, index) => (
              <div key={index} className="m-2">
                <Image
                  src={image}
                  alt="Dog"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
