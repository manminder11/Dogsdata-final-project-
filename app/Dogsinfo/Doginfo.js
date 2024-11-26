"use client";

import React, { useState, useEffect } from "react";

const DogInfo = () => {
  const [dogInfo, setDogInfo] = useState(null);

  useEffect(() => {
    fetch('/info.json')
      .then(response => response.json())
      .then(data => setDogInfo(data))
      .catch(error => console.error('Error fetching dog info:', error));
  }, []);

  return (
    <div>
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