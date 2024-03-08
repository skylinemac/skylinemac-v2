import React from "react";
import './index.css';
import Navbar from "./navbar";

function HomePage() {
    return (
        <div>
            <Navbar />
            <h1>What is SMAC?</h1>
            <p>This is the content of my homepage.</p>
        </div>
    );
}

export default HomePage;