import React, { useState, createContext } from 'react'
import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UseStateComponent from "./components/UseStateComponent";
import UseEffect from './components/UseEffect';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import GenerateAnExcuse from './GenerateAnExcuse';
import ToDoList from './ToDoList';
import Form from './components/Form';
import DynamicOutput from './components/DynamicOutput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AxiosComponent from './components/AxiosComponent';

export const AppContext = createContext()

const ReactRouterDom = () => {
  const [username, setUsername] = useState("PedroTech")
  const client = new QueryClient(
    {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  }
  )
  return (
    <div className={styles.RouterDom}>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{username, setUsername}}>
          <Router>
              <Navbar className={styles.nav}/>
              <Routes className={styles.homeClass}>   {/* */}
                  All topics

                <Route path="/UseStateComponent" element={<UseStateComponent />}/>
                <Route path="/UseEffect" element={<UseEffect />}/>
                <Route path="/useQuery" element={<Home />}/>            {/*username={username}*/}
                <Route path="/profile" element={<Profile/>}/>   {/*username={username} setUsername={setUsername}*/}
                <Route path="/contact" element={<Contact/>}/>
                
                <Route path="/DynamicOutput" element={<DynamicOutput/>}/>
                <Route path="/AxiosComponent" element={<AxiosComponent/>}/>
                <Route path="/anExcuse" element={<GenerateAnExcuse/>}/>
                <Route path="/ToDoList" element={<ToDoList/>}/>
                <Route path="/Form" element={<Form/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
                
                
                
                  
              </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default ReactRouterDom