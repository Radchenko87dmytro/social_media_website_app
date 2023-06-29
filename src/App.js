import { useState } from 'react';
import styles from './App.module.css';
import User from './User';


function App() {

  const names = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 45},
    {name: "Mike", age: undefined},
    {name: "Dustin", age: undefined},
    {name: "Lukas", age: undefined},
    ]
  
    const  [age, setAge]=useState(0)
    const  [text, setText]=useState("")
    

    const increace = ()=>{
      setAge(age+1)
        
       // setAge(age)
        console.log(age)
    }

    const typeText =(e)=>{
      setText(e.target.value)
      console.log(e.target.value)
    }
  
  return (
    <div className={styles.App1}>
      <input onChange={typeText}/>
      <p>{text}</p>
      {age}
      <button onClick={increace}>Increace age</button>

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


      



      {/* <Job sarary={900} position="Senior SDE" company="Amazon"/>
      <Job sarary={1200} position="Junior SDE" company="Google"/>
      <Job sarary={1000} position="Project Manager" company="Netflix"/> */}
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
