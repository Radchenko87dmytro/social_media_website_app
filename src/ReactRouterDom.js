import React from 'react'
import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './Navbar';

const ReactRouterDom = () => {
  return (
    <div className={styles.RouterDom}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default ReactRouterDom