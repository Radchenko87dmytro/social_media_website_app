import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./App.module.css";

const Navbar = () => {
    return (
        <div >
           <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link> 
            <Link to="/DynamicOutput">Dynamic Output</Link>
            
            <Link to="/anExcuse">GenerateAnExcuse</Link>
            <Link to="/ToDoList">ToDoList</Link>
        </div>
    );
};

export default Navbar;