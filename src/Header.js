import React from 'react'
import './css/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <h3>Vaimo Assessment - Silas Chauke</h3>
            </Link>
            
        </div>
    )
}

export default Header
