import React, { useState } from 'react'
import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './Navbar';

const ReactRouterDom = () => {
  const [username, setUsername] = useState("PedroTech")
  return (
    <div className={styles.RouterDom}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home username={username}/>}/>
                <Route path="/profile" element={<Profile username={username}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default ReactRouterDom