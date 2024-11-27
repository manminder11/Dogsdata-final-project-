"use client";

import React, { useState } from "react";
import Image from "next/image";

const DogInfo = () => {
  const [dogBreeds, setDogBreeds] = useState(null);
  const [dogImages, setDogImages] = useState([]);
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
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched dog images:", data.message);
        setDogImages(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
        setError(error.message);
      });
  };

  const fetchRandomDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched random dog image:", data.message);
        setDogImages([data.message]);
      })
      .catch((error) => {
        console.error("Error fetching random dog image:", error);
        setError(error.message);
      });
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={fetchDogBreeds}>
        Fetch Dog Breeds
      </button>
      <button className="btn btn-secondary m-2" onClick={fetchRandomDogImage}>
        Fetch Random Dog Image
      </button>
      {error && <p>Error fetching dog info: {error}</p>}
      {dogBreeds ? (
        <div>
          <h2>Dog Breeds</h2>
          <ul>
            {Object.keys(dogBreeds).map((breed) => (
              <li key={breed}>
                <button
                  className="btn btn-link"
                  onClick={() => fetchDogImages(breed)}
                >
                  {breed}
                </button>
                {dogBreeds[breed].length > 0 && (
                  <ul>
                    {dogBreeds[breed].map((subBreed) => (
                      <li key={subBreed}>
                        <button
                          className="btn btn-link"
                          onClick={() => fetchDogImages(`${breed}/${subBreed}`)}
                        >
                          {subBreed}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No breeds data fetched yet.</p>
      )}
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

export default DogInfo;
