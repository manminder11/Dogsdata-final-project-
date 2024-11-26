"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
            style={darkMode ? styles.darkContainer : styles.container}
        >
            <header
                className="d-flex justify-content-between align-items-center p-3"
                style={darkMode ? styles.darkHeader : styles.header}
            >
                <h1>Dog Information</h1>
                <button
                    className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
                    onClick={toggleDarkMode}
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
                        <a
                            className="nav-link"
                            href="#home"
                            style={darkMode ? styles.darkNavLink : styles.navLink}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item" style={styles.navItem}>
                        <a
                            className="nav-link"
                            href="#about"
                            style={darkMode ? styles.darkNavLink : styles.navLink}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item" style={styles.navItem}>
                        <a
                            className="nav-link"
                            href="#contact"
                            style={darkMode ? styles.darkNavLink : styles.navLink}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <main className="p-3" style={styles.main}>
                {children}
            </main>
            <aside
                className="p-3"
                style={darkMode ? styles.darkSidebar : styles.sidebar}
            >
                <h2>Sidebar</h2>
                <ul className="list-unstyled" style={styles.sidebarList}>
                    <li style={styles.sidebarItem}>
                        <a
                            href="#link1"
                            style={darkMode ? styles.darkSidebarLink : styles.sidebarLink}
                        >
                            Link 1
                        </a>
                    </li>
                    <li style={styles.sidebarItem}>
                        <a
                            href="#link2"
                            style={darkMode ? styles.darkSidebarLink : styles.sidebarLink}
                        >
                            Link 2
                        </a>
                    </li>
                    <li style={styles.sidebarItem}>
                        <a
                            href="#link3"
                            style={darkMode ? styles.darkSidebarLink : styles.sidebarLink}
                        >
                            Link 3
                        </a>
                    </li>
                </ul>
            </aside>
            <footer
                className="text-center p-3"
                style={darkMode ? styles.darkFooter : styles.footer}
            >
                <p>&copy; 2023 Dog Info</p>
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
    darkContainer: {
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
        backgroundColor: "#343a40",
        color: "#ffffff",
    },
    header: {
        gridArea: "header",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #dee2e6",
    },
    darkHeader: {
        gridArea: "header",
        backgroundColor: "#343a40",
        borderBottom: "1px solid #dee2e6",
        color: "#ffffff",
    },
    nav: {
        gridArea: "nav",
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
        transition: "color 0.3s ease",
    },
    darkNavLink: {
        textDecoration: "none",
        color: "#ffffff",
        transition: "color 0.3s ease",
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
    darkSidebar: {
        gridArea: "sidebar",
        backgroundColor: "#343a40",
        padding: "1rem",
        borderRight: "1px solid #dee2e6",
        color: "#ffffff",
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
        transition: "color 0.3s ease",
    },
    darkSidebarLink: {
        textDecoration: "none",
        color: "#ffffff",
        transition: "color 0.3s ease",
    },
    footer: {
        gridArea: "footer",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #dee2e6",
    },
    darkFooter: {
        gridArea: "footer",
        backgroundColor: "#343a40",
        borderTop: "1px solid #dee2e6",
        color: "#ffffff",
    },
};

export default DogLayout;
