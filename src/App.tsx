import React from 'react';
import Header from "./components/header/Header";
const s = require('./components/main/main.less');

function App() {
    return (
        <>
            <Header/>
            <main id="content">
                <div className="container">
                    <h1>car house</h1>
                    <h2>Подбор авто из США в два клика</h2>
                </div>
            </main>
            <footer id="footer">1</footer>
        </>
    );
}

export default App;
