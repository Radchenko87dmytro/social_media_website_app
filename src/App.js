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
  
   

    

    // fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })

    


    const [predictedAge, setPredictedAge] = useState(null)
    const [name, setName] = useState("")
    const fetchData = () =>{
      Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setPredictedAge(res.data);
      })
    }
  
  return (
    <div className={styles.App1}>

      <ReactRouterDom/>

      
      
      <br/>
      <br/>

      <input placeholder='Ex. Perdo...'
             onChange={(event)=>{
              setName(event.target.value)
              //styles={{padding: "20 px" }}
             }}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>

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






// const Job = (props) => {
//   return(
//     <div>
//       <div>{props.sarary}</div>
//       <div>{props.position}</div>
//       <div>{props.company}</div>
//     </div>
//   )
  
// }

export default App;
