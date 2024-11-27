"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DogInfo from "./DogInfo";

const DogLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        <ul className="navbar-nav mr-auto" style={styles.navList}>
          <li className="nav-item" style={styles.navItem}>
            <a className="nav-link" href="#home" style={styles.navLink}>
              Home
            </a>
          </li>
          <li className="nav-item" style={styles.navItem}>
            <a className="nav-link" href="#about" style={styles.navLink}>
              About
            </a>
          </li>
          <li className="nav-item" style={styles.navItem}>
            <a className="nav-link" href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <main className="p-3" style={styles.main}>
        {children}
        <DogInfo />
      </main>
      <aside
        className={`p-3 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
        style={styles.sidebar}
      >
        <h2>Sidebar</h2>
        <ul className="list-unstyled" style={styles.sidebarList}>
          <li style={styles.sidebarItem}>
            <a href="#link1" style={styles.sidebarLink}>
              Link 1
            </a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="#link2" style={styles.sidebarLink}>
              Link 2
            </a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="#link3" style={styles.sidebarLink}>
              Link 3
            </a>
          </li>
        </ul>
      </aside>
      <footer className="text-center p-3" style={styles.footer}>
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
            "sidebar main"
            "footer footer"
        `,
    gridTemplateRows: "auto auto 1fr auto",
    gridTemplateColumns: "200px 1fr",
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
  sidebar: {
    gridArea: "sidebar",
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    borderRight: "1px solid #dee2e6",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  sidebarItem: {
    margin: "0.5rem 0",
  },
  sidebarLink: {
    textDecoration: "none",
    color: "#007bff",
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
