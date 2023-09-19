"use client"
import React from 'react'

const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {currentDate}</p>
        </footer>
    );
}

export default Footer; 