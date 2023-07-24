import React, { useState, createContext } from 'react'
import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import GenerateAnExcuse from './GenerateAnExcuse';
import ToDoList from './ToDoList';
import DynamicOutput from './components/DynamicOutput';

export const AppContext = createContext()

const ReactRouterDom = () => {
  const [username, setUsername] = useState("PedroTech")
  return (
    <div className={styles.RouterDom}>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
            <Navbar className={styles.nav}/>
            <Routes className={styles.homeClass}>   {/* */}
                All topics

              <Route path="/" element={<Home />}/>            {/*username={username}*/}
              <Route path="/profile" element={<Profile/>}/>   {/*username={username} setUsername={setUsername}*/}
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/DynamicOutput" element={<DynamicOutput/>}/>
              <Route path="/anExcuse" element={<GenerateAnExcuse/>}/>
              <Route path="/ToDoList" element={<ToDoList/>}/>
              <Route path="*" element={<h1>Page not found</h1>}/>
              
              
                
            </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default ReactRouterDom