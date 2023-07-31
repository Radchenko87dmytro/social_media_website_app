import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./App.module.css";

const Navbar = () => {
    return (
        <div >
            <Link to="/UseStateComponent">useState </Link>
            <Link to="/UseEffect">useEffect </Link>
            <Link to="/useQuery">useQuery (Home)</Link>
            <Link to="/profile">useContext (Profile)</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/DynamicOutput">Dynamic Output</Link>
            <Link to="/AxiosComponent">Axios</Link>
            <Link to="/FetchingDataFromAPI">FetchingDataFromAPI</Link>
            
            <Link to="/anExcuse">GenerateAnExcuse</Link>
            <Link to="/ToDoList">ToDoList</Link>
            <Link to="/Form">REACT-HOOK-FORM</Link>
            <Link to="/CustomHooks">CustomHooks</Link>
            <Link to="/TypeScript_Safety">TypeScript_Safety</Link>
        </div>
    );
};

export default Navbar;