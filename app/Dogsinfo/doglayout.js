import React from 'react';

const DogLayout = ({ children }) => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Dog Information</h1>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
                        <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
                        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main style={styles.main}>
                {children}
            </main>
            <aside style={styles.sidebar}>
                <h2>Sidebar</h2>
                <ul style={styles.sidebarList}>
                    <li style={styles.sidebarItem}><a href="#link1" style={styles.sidebarLink}>Link 1</a></li>
                    <li style={styles.sidebarItem}><a href="#link2" style={styles.sidebarLink}>Link 2</a></li>
                    <li style={styles.sidebarItem}><a href="#link3" style={styles.sidebarLink}>Link 3</a></li>
                </ul>
            </aside>
            <footer style={styles.footer}>
                <p>&copy; 2023 Dog Info</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        gridTemplateAreas: `
            "header header"
            "sidebar main"
            "footer footer"
        `,
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '200px 1fr',
        minHeight: '100vh',
    },
    header: {
        gridArea: 'header',
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        textAlign: 'center',
        borderBottom: '1px solid #dee2e6',
        transition: 'background-color 0.3s ease',
    },
    nav: {
        marginTop: '1rem',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        margin: '0 1rem',
    },
    navLink: {
        textDecoration: 'none',
        color: '#007bff',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#0056b3',
    },
    main: {
        gridArea: 'main',
        padding: '1rem',
        animation: 'fadeIn 1s ease-in-out',
    },
    sidebar: {
        gridArea: 'sidebar',
        backgroundColor: '#f1f1f1',
        padding: '1rem',
        borderRight: '1px solid #dee2e6',
        transition: 'background-color 0.3s ease',
    },
    sidebarList: {
        listStyle: 'none',
        padding: 0,
    },
    sidebarItem: {
        margin: '0.5rem 0',
    },
    sidebarLink: {
        textDecoration: 'none',
        color: '#007bff',
        transition: 'color 0.3s ease',
    },
    sidebarLinkHover: {
        color: '#0056b3',
    },
    footer: {
        gridArea: 'footer',
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #dee2e6',
        transition: 'background-color 0.3s ease',
    },
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
};

export default DogLayout;