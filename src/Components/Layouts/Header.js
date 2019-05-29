import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My Todo App</h1>
            <Link style={{color:"#fff", textDecoration:"none"}} to="/">Home</Link> | <Link style={{color:"#fff", textDecoration:"none"}} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

export default Header
