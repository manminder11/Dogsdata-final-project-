import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Dogs Info</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>We provide comprehensive information about different dog breeds.</p>
                </section>
                <section>
                    <h2>Popular Breeds</h2>
                    <ul>
                        <li>Labrador Retriever</li>
                        <li>German Shepherd</li>
                        <li>Golden Retriever</li>
                        <li>Bulldog</li>
                        <li>Beagle</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Dogs Info. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;