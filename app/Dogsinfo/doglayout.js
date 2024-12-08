"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DogInfo from "./DogInfo";
import Link from "next/link";
import Image from "next/image";
import Home from "./home";

const DogLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dogImages, setDogImages] = useState([]);
  const [error, setError] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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

  const fetchRandomDogImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched random dog images:", data.message);
        setDogImages(data.message);
      })
      .catch((error) => {
        console.error("Error fetching random dog images:", error);
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
    <div
      className={`container-fluid ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={styles.container}
    >
      <header
        className="d-flex justify-content-between align-items-center p-3"
        style={styles.header}
      >
        <h1>Dog Information</h1>
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={toggleDarkMode}
          style={{
            ...styles.button,
            backgroundColor: darkMode ? "#e0e0e0" : "#343a40",
            color: darkMode ? "#343a40" : "#ffffff",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        style={styles.nav}
      >
        <ul className="navbar-nav">
          <li className="nav-item" style={styles.navItem}>
            <button 
              className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={fetchRandomDogImages}
              style={{
                ...styles.button,
                backgroundColor: darkMode ? "#e0e0e0" : "#343a40",
                color: darkMode ? "#343a40" : "#ffffff",
              }}
            >
              Random Dogs
            </button>
          </li>
        </ul>
      </nav>
      <main className="p-3" style={styles.main}>
        {children}
        <form onSubmit={handleSearch} className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a breed"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
        <DogInfo />
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
      </main>
      <footer
        className={`text-center p-3 ${
          darkMode ? "bg-dark text-white" : "bg-light text-dark"
        }`}
        style={styles.footer}
      >
        <p>&copy; 2024 Dog Info</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateAreas: `
            "header header"
            "nav nav"
            "main main"
            "footer footer"
        `,
    gridTemplateRows: "auto auto 1fr auto",
    gridTemplateColumns: "1fr",
    minHeight: "100vh",
  },
  header: {
    gridArea: "header",
    backgroundColor: "#007bff",
    borderBottom: "1px solid #dee2e6",
    color: "#ffffff",
  },
  nav: {
    gridArea: "nav",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #dee2e6",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#007bff",
  },
  main: {
    gridArea: "main",
    padding: "1rem",
  },
  footer: {
    gridArea: "footer",
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #dee2e6",
  },
  button: {
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default DogLayout;
