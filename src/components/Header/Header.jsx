import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"



const Header = () => {
    return (
        <nav>
            {/* <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">statistics</ActiveLink>
            <ActiveLink to="/applied-job">applied-job</ActiveLink>
            <ActiveLink to="/blog">blog</ActiveLink> */}
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/applied-job">Applied Job</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>

            
        
        </nav>
    );
};

export default Header;