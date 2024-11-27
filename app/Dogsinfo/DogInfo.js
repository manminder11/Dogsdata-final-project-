"use client";

import React, { useState, useEffect } from "react";

const DogInfo = () => {
  const [dogInfo, setDogInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/info.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setDogInfo(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      {error && <p>Error fetching dog info: {error}</p>}
      {dogInfo ? (
        <div>
          <h2>Dog Breeds</h2>
          <ul>
            {Object.keys(dogInfo.message).map(breed => (
              <li key={breed}>
                {breed}
                {dogInfo.message[breed].length > 0 && (
                  <ul>
                    {dogInfo.message[breed].map(subBreed => (
                      <li key={subBreed}>{subBreed}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DogInfo;