import { useState, useEffect } from 'react';
import styles from './App.module.css';
import User from './User';
import ToDoList from './ToDoList';
import Axios from 'axios';
import GenerateAnExcuse from './GenerateAnExcuse';
import ReactRouterDom from './ReactRouterDom';


function App() {

  const names = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 45},
    {name: "Mike", age: undefined},
    {name: "Dustin", age: undefined},
    {name: "Lukas", age: undefined},
    ]
  
  return (
    <div className={styles.App1}>

      <ReactRouterDom/>

      
      
      <br/>
      <br/>

      

      <br/>
      <br/>

      
      

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {names.map((user, key)=>{
          return (
            <div>
              <User key={key}
                    name={user.name}
                    age={user.age}/>
            </div>
          )
           
          
      })} 

      <br></br>
      <br></br>
      
      
    </div>
    
    
  );
}



export default App;
